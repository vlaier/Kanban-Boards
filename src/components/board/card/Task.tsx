import { KanbanCard } from '..';
import { DraggableItem } from '../dnd/Draggable';

export const TaskCard: React.FC<{ task: KanbanCard; remove: () => void }> = (
  props
) => {
  const { task, remove } = { ...props };

  return (
    <DraggableItem id={task.id}>
      <div className="rounded-lg border border-gray-400/20 shadow-sm  w-full overflow-hidden bg-zinc-300 divide-y divide-zinc-400  ">
        <div className="py-1 px-2 ">
          <div className="flex justify-start gap-2 items-center ">
            <span className="shadow-inner shadow-gray-400 text-sm text-gray-600 bg-gray-200 w-4 h-4 p-3 rounded-full flex items-center justify-center">
              {task.id}
            </span>
            <h3 className="font-bold shadow-inner shadow-gray-400 p-1 bg-gray-200 rounded-xl">
              {task.title}
            </h3>
          </div>
          <div className="flex justify-between items-baseline ">
            {task.description}
          </div>
        </div>
        <button className="p-2" onClick={remove}>
          Remove
        </button>
      </div>
    </DraggableItem>
  );
};
