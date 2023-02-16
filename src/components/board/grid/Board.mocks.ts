export interface ITaskCard {
  id: string;
  title: string;
  description?: string;
  category: string;
}
const base: ITaskCard[] = [
  {
    id: '0',
    title: 'First task',
    category: 'toDo',
  },
  {
    id: '1',
    title: "I'm questing here",
    category: 'toDo',
  },
  {
    id: '2',
    title: "I'm magic tada",
    category: 'toDo',
  },
];
export const mockBasicBoardProps = {
  base,
};
