import { ITaskCard } from '../cards';

export interface IBoard {
  id: number;
  title: string;
  tasks: ITaskCard[];
}
export type IBoardAction =
  | { type: 'addTask'; task: ITaskCard }
  | { type: 'removeTask'; taskId: number };

export interface IBoardState extends IBoard {
  addTask: (item: ITaskCard) => void;
  removeTask: (item: ITaskCard) => void;
}
