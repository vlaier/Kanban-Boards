import { createContext, ReactNode, useState } from 'react';
import { IBoardState } from '.';
import { ITaskCard } from '../cards';

const Context = createContext<IBoardState | null>(null);

export const BoardContext = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITaskCard[]>([]);
  return (
    <Context.Provider
      value={{
        id: 1,
        tasks,
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
