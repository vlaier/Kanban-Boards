export interface KanbanCard {
  id: string;
  title: string;
  description: string;
  timeRequired: number;
  isPriority: boolean;
  progress: string;
  tags: Tag[];
  blockedTasks: KanbanCard[];
  due?: Date;
}
interface Tag {
  id: string;
  name: string;
}
type TaskAction =
  | { type: 'add'; task: KanbanCard }
  | { type: 'update_progress'; id: KanbanCard['id']; updatedProgress: string }
  | { type: 'remove'; id: KanbanCard['id'] };
