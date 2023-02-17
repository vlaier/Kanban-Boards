import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { KanbanCard } from '..';
import { useTasksDispatch } from '../BoardContext';

import { Category } from '../section/Category';

const Board: React.FC<KanbanCard[]> = (props) => {
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
        type: 'update_progress',
        id: active.id as string,

        updatedProgress: over.data.current.category,
      });
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 px-16">
        <div>
          <h3>Planned</h3>
          <Category id={'0'} category="toDo" />
        </div>
        <div>
          <h3>In Progress</h3>
          <Category id={'1'} category="inProgress" />
        </div>
        <div>
          <h3>Done</h3>
          <Category id={'2'} category="done" />
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
