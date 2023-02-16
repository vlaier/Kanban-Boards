export interface KanbanCard {
  id: string;
  title: string;
  description: string;
  timeRequired: number;
  isPriority: boolean;
  category: string;
  tags: Tag[];
  blockedTasks: KanbanCard[];
}
interface Tag {
  id: string;
  name: string;
}
