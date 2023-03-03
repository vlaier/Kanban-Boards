import { tasksReducer } from '@/lib/functions';
import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { KanbanCard, TaskAction } from '.';
const BoardContext = createContext<KanbanCard[] | null>(null);
const BoardDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

export const BoardContextProvider: React.FC<{
  children: ReactNode;
  initialTasks?: KanbanCard[];
}> = ({ children, initialTasks = [] }) => {
  const loadTasks =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('tasks') || '[]')
      : [];
  const [tasks, dispatch] = useReducer<Reducer<KanbanCard[], TaskAction>>(
    tasksReducer,
    loadTasks
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <BoardContext.Provider value={tasks}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
};
export const useTasks = () => {
  const tasks = useContext(BoardContext);
  if (!tasks) throw new Error('BoardContext not found');
  return tasks;
};
export const useTasksDispatch = () => {
  const dispatch = useContext(BoardDispatchContext);
  if (!dispatch) throw new Error('BoardDispatchContext not found');
  return dispatch;
};
