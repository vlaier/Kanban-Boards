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
    description: " first description ever I'm a visionary",
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
  {
    id: '3',
    title: 'First task',
    category: 'toDo',
  },
  {
    id: '4',
    title: "I'm questing here",
    category: 'toDo',
  },
  {
    id: '5',
    title: "I'm magic tada",
    category: 'toDo',
  },
];
export const mockBasicBoardProps = {
  base,
};
