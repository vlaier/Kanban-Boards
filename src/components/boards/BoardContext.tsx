import { createContext, ReactNode, useContext, useState } from 'react';
import { IBoardState } from '.';
import { ITaskCard } from '../cards';
import { mockBasicBoardProps } from './basic/BasicBoard.mocks';

const Context = createContext<IBoardState | null>(null);

export const BoardContext = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITaskCard[]>([]);
  return (
    <Context.Provider
      value={{
        id: 0,
        tasks: mockBasicBoardProps.base.tasks,
        addTask: (item) => {
          const updatedTasks = [...tasks, item];
          return setTasks(updatedTasks);
        },
        removeTask: (item) => {
          const filtredTasks = tasks.filter((task) => task.id !== item.id);
          setTasks(filtredTasks);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useBoardState = () => {
  const boardState = useContext(Context);
  if (!boardState) {
    throw new Error('You forgot to add BoardContext');
  }
  return boardState;
};
