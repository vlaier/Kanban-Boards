import { useTasks } from '../BoardContext';
import { TaskCard } from '../card/Task';
import { Droppable } from '../dnd/Droppable';

export const Category: React.FC<{ id: string; category: string }> = (props) => {
  const tasks = useTasks();
  const { id, category } = { ...props };
  const categoryTasks = tasks.filter((task) => {
    return task.progress === category;
  });
  const TasksElements = categoryTasks.map((task) => {
    return <TaskCard task={task} key={task.id} />;
  });
  return (
    <Droppable id={category} data={{ category }}>
      {TasksElements}
    </Droppable>
  );
};
