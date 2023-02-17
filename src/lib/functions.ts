import { KanbanCard, TaskAction } from '@/components/board';

export const tasksReducer = (
  tasks: KanbanCard[],
  action: TaskAction
): KanbanCard[] => {
  switch (action.type) {
    case 'changeCategory': {
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.id) {
          console.log(task);
          return { ...task, category: action.newCategory };
        }
        return { ...task };
      });
      return updatedTasks;
    }
    case 'add': {
      const uuid: () => string = require('uuid');
      const newTask = {
        ...action.task,
        id: uuid(),
      };
      return [...tasks, newTask];
    }
    case 'remove': {
      const filtredTasks = tasks.filter((task) => task.id !== action.id);
      return filtredTasks;
    }
  }
};
