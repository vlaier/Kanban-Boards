import { KanbanCard } from '..';
const base: KanbanCard[] = [
  {
    id: '0',
    title: 'First task',
    description: " first description ever I'm a visionary",
    category: 'toDo',
    blockedTasks: [],
    isPriority: false,
    tags: [],
    timeRequired: 3,
  },
  {
    id: '1',
    title: 'No time for the wicked',
    description: 'Fix mental health crisis',
    category: 'toDo',
    blockedTasks: [],
    isPriority: true,
    tags: [
      { id: '01d', name: 'crisis' },
      { id: '012d', name: 'bug fix' },
    ],
    timeRequired: 5,
  },
];
export const mockBasicBoardProps = {
  base,
};
