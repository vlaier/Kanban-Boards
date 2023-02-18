import { KanbanCard } from '..';
import { useTasksDispatch } from '../BoardContext';
import { DraggableItem } from '../dnd/Draggable';

export const TaskCard: React.FC<KanbanCard> = (props) => {
  const { id, title, description } = { ...props };
  const dispatch = useTasksDispatch();
  return (
    <DraggableItem id={id}>
      <div className="rounded-lg border dark:border-gray-700  shadow-sm  w-full overflow-hidden bg-gray-100 dark:bg-gray-600/80 divide-y divide-gray-400 dark:divide-gray-700">
        <div className="py-1 px-2 ">
          <div className="flex justify-start gap-2 items-center ">
            <h3 className="">{title}</h3>
          </div>
          <div className="flex justify-between items-baseline ">
            {description}
          </div>
        </div>
        <button
          className="p-2"
          onClick={() => {
            dispatch({ type: 'remove', id });
          }}
        >
          Remove
        </button>
      </div>
    </DraggableItem>
  );
};
