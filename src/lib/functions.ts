import { KanbanCard, TaskAction } from '@/components/board';

export const tasksReducer = (
  tasks: KanbanCard[],
  action: TaskAction
): KanbanCard[] => {
  switch (action.type) {
    case 'update_progress': {
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, progress: action.updatedProgress };
        }
        return { ...task };
      });
      return updatedTasks;
    }
    case 'add': {
      return [...tasks, action.task];
    }
    case 'remove': {
      const filtredTasks = tasks.filter((task) => task.id !== action.id);
      return filtredTasks;
    }
  }
};
