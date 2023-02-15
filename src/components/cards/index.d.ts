export interface ITaskCard {
  id: number;
  title: string;
  stage: 'toDo' | 'inProgress' | 'done';
  description?: string;
}
