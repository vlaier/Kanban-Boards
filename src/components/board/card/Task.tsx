import { KanbanCard } from '..';
import { useTasksDispatch } from '../BoardContext';
import { DraggableItem } from '../dnd/Draggable';

export const TaskCard: React.FC<{ task: KanbanCard }> = (props) => {
  const { task } = { ...props };
  const dispatch = useTasksDispatch();
  return (
    <DraggableItem id={task.id}>
      <div className="rounded-lg border dark:border-slate-700  shadow-sm  w-full overflow-hidden bg-gray-100 dark:bg-slate-600/80 divide-y divide-gray-400 dark:divide-slate-700">
        <div className="py-1 px-2 ">
          <div className="flex justify-start gap-2 items-center ">
            <h3 className="">{task.title}</h3>
          </div>
          <div className="flex justify-between items-baseline ">
            {task.description}
          </div>
        </div>
        <button
          className="p-2"
          onClick={() => {
            dispatch({ type: 'remove', id: task.id });
          }}
        >
          Remove
        </button>
      </div>
    </DraggableItem>
  );
};
