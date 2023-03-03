import { KanbanCard, TaskAction } from '@/components/board';

export const tasksReducer = (
  tasks: KanbanCard[],
  action: TaskAction
): KanbanCard[] => {
  switch (action.type) {
    case 'changeCategory': {
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, category: action.newCategory };
        }
        return { ...task };
      });
      return updatedTasks;
    }
    case 'add': {
      const uuid = require('uuid');
      const newTask = {
        ...action.task,
        id: uuid.v4(),
      };
      return [...tasks, newTask];
    }
    case 'remove': {
      const filtredTasks = tasks.filter((task) => task.id !== action.id);
      return filtredTasks;
    }
    case 'editTask': {
      const currentTask = tasks.find((task) => task.id === action.task.id);
      const editedTask = { ...currentTask, ...action.task };
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.task.id) {
          return editedTask;
        }
        return task;
      });
      return updatedTasks;
    }
    case 'loadTasks': {
      const tasksStorage = localStorage.getItem('tasks');
      if (!tasksStorage) return [...action.tasks];
      return [...JSON.parse(tasksStorage)];
    }
  }
};
