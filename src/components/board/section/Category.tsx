import { useTasks } from '../BoardContext';
import { TaskCard } from '../card/Task';
import { Droppable } from '../dnd/Droppable';
import { TaskFormModal } from '../form/TaskForm';

export const Category: React.FC<{ id: string; category: string }> = (props) => {
  const tasks = useTasks();
  const { id, category } = { ...props };
  const categoryTasks = tasks.filter((task) => {
    return task.category === category;
  });
  const tasksElements = categoryTasks.map((task) => {
    return <TaskCard {...task} key={task.id} />;
  });
  return (
    <Droppable id={category} data={{ category }}>
      <div className="w-full">
        <div className="space-y-2   py-4 px-2 w-full ">{tasksElements}</div>
        <div className="space-y-2   py-4 px-2 w-full ">
          <TaskFormModal>
            <div className="rounded-lg shadow-inner dark:shadow-slate-600 shadow-gray-400 py-3  w-full overflow-hidden bg-gray-100 dark:bg-slate-400/60  dark:text-gray-300 text-gray-700 font-bold">
              Add task
            </div>
          </TaskFormModal>
        </div>
      </div>
    </Droppable>
  );
};
