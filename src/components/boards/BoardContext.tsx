import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { IBoard, IBoardAction } from '.';
import { mockBasicBoardProps } from './basic/BasicBoard.mocks';

const Context = createContext<IBoard | null>(null);
const DispatchContext = createContext<Dispatch<IBoardAction> | null>(null);

const boardReducer = (state: IBoard, action: IBoardAction) => {
  switch (action.type) {
    case 'addTask': {
      const newTask = action.task;
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case 'removeTask': {
      const filtredTasks = state.tasks.filter((task) => {
        return task.id !== action.taskId;
      });
      return { ...state, tasks: filtredTasks };
    }
  }
};
export const BoardContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [boardState, dispatch] = useReducer(
    boardReducer,
    mockBasicBoardProps.base
  );
  return (
    <Context.Provider value={boardState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
};
export const useBoardState = () => {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);
  if (!state || !dispatch) {
    throw new Error('You forgot to add BoardContext');
  }
  return { state, dispatch };
};
