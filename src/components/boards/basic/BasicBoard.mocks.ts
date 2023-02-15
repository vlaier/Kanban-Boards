import { IBoard } from '..';

const base: IBoard = {
  id: 0,
  title: 'Design',
  tasks: [
    {
      id: 0,
      title: 'Task1',
      stage: 'toDo',
      description: 'Just some mockup data',
    },
    {
      id: 1,
      title: 'Task2',
      stage: 'toDo',
      description: 'I really should move faster',
    },
    {
      id: 2,
      title: 'Task3',
      stage: 'inProgress',
      description: 'Soon to be done',
    },
    {
      id: 3,
      title: 'Task4',
      stage: 'done',
      description: 'Finally something is done',
    },
  ],
};

export const mockBasicBoardProps = {
  base,
};
