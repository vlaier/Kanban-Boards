import { ITaskCard } from '../cards';

export interface IBoard {
  id: number;
  tasks: ITaskCard[];
}
export interface IBoardState extends IBoard {
  addTask: (item: ITaskCard) => void;
  removeTask: (item: ITaskCard) => void;
}
