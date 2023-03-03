export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  timeRequired?: number;
  isPriority?: boolean;
  category: string;
  tags?: Tag[];
  blockedTasks?: KanbanCard[];
  due?: Date;
}

interface Tag {
  id: string;
  name: string;
}
type TaskAction =
  | { type: 'add'; task: KanbanCard }
  | { type: 'changeCategory'; id: KanbanCard['id']; newCategory: string }
  | { type: 'remove'; id: KanbanCard['id'] }
  | { type: 'editTask'; task: KanbanCard }
  | { type: 'loadTasks'; tasks: KanbanCard[] };
