import { Dispatch } from 'react';
import { KanbanCard, TaskAction } from '..';
import { TaskCard } from '../card/Task';

export const Category: React.FC<{
  tasks: KanbanCard[];
  progress: string;
  dispatch: Dispatch<TaskAction>;
}> = ({ tasks, progress, dispatch }) => {
  const filtredTasks = tasks.filter((task) => task.progress === progress);
  const elements = filtredTasks.map((task) => {
    return (
      <TaskCard
        task={task}
        key={task.id}
        remove={() => dispatch({ type: 'remove', id: task.id })}
      />
    );
  });
  return <div className="flex flex-col gap-2 p-2 w-full">{elements}</div>;
};
