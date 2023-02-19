import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useTasksDispatch } from '../BoardContext';

import { Category } from '../section/Category';

const Board: React.FC = () => {
  const dispatch = useTasksDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  const handleDragEnd: (event: DragEndEvent) => void = ({ active, over }) => {
    if (over && over.data.current) {
      dispatch({
        type: 'changeCategory',
        id: active.id as string,
        newCategory: over.data.current.category,
      });
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-4">
        <div>
          <h3 className="mb-1 px-2 p-y-1 bg-slate-400 text-slate-800 font-bold text-sm w-fit rounded-full">
            Planned
          </h3>
          <Category id={'0'} category="toDo" />
        </div>
        <div>
          <h3 className="mb-1 px-2 p-y-1 bg-slate-400 text-slate-800 font-bold text-sm w-fit rounded-full">
            In Progress
          </h3>
          <Category id={'1'} category="inProgress" />
        </div>
        <div>
          <h3 className="mb-1 px-2 p-y-1 bg-slate-400 text-slate-800 font-bold text-sm w-fit rounded-full">
            Done
          </h3>
          <Category id={'2'} category="done" />
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
