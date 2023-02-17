import { KanbanCard } from '..';
const base: KanbanCard = {
  id: '0',
  title: 'First task',
  description: " first description ever I'm a visionary",
  progress: 'toDo',
  blockedTasks: [],
  isPriority: false,
  tags: [],
  timeRequired: 3,
};
export const mockBasicBoardProps = {
  base,
};
