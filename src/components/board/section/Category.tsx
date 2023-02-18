import { useTasks } from '../BoardContext';
import { TaskCard } from '../card/Task';
import { Droppable } from '../dnd/Droppable';

export const Category: React.FC<{ id: string; category: string }> = (props) => {
  const tasks = useTasks();
  const { id, category } = { ...props };
  const categoryTasks = tasks.filter((task) => {
    return task.category === category;
  });
  const tasksElements = categoryTasks.map((task) => {
    return <TaskCard task={task} key={task.id} />;
  });
  return (
    <Droppable id={category} data={{ category }}>
      <div className="w-full">
        <div className="space-y-2   py-4 px-2 w-full ">{tasksElements}</div>
        <div className="space-y-2   py-4 px-2 w-full ">
          <button className="border border-gray-400">Add task</button>
        </div>
      </div>
    </Droppable>
  );
};
