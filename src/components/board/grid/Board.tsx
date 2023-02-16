import { DndContext, useDraggable } from '@dnd-kit/core';
import { Reducer, useReducer, useState } from 'react';
import { Droppable } from '../dnd/Droppable';
import { ITaskCard, mockBasicBoardProps } from './Board.mocks';

const DraggableItem: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  const { isDragging, setNodeRef, listeners, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      className="border-green-300 border-2 w-fit flex items-center justify-center bg-purple-400/80"
    >
      {children}
    </div>
  );
};
const tasksReducer = (tasks: ITaskCard[], action: TaskAction): ITaskCard[] => {
  switch (action.type) {
    case 'change_category': {
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, category: action.newCategory };
        }
        return { ...task };
      });
      return updatedTasks;
    }
    case 'add': {
      return [...tasks, action.task];
    }
  }
};
type TaskAction =
  | { type: 'add'; task: ITaskCard }
  | { type: 'change_category'; id: ITaskCard['id']; newCategory: string };
const Board: React.FC<ITaskCard[]> = (props) => {
  const [tasks, dispatch] = useReducer<Reducer<ITaskCard[], TaskAction>>(
    tasksReducer,
    mockBasicBoardProps.base
  );
  const [showForm, setShowForm] = useState(false);

  const TaskElements: React.FC<{ category: string }> = ({ category }) => {
    const filtredTasks = tasks.filter((task) => task.category === category);
    const elements = filtredTasks.map((task) => {
      return (
        <DraggableItem id={task.id} key={task.id}>
          {task.title}
        </DraggableItem>
      );
    });
    return <div>{elements}</div>;
  };
  return (
    <DndContext
      onDragEnd={({ over, active }) => {
        if (over) {
          dispatch({
            type: 'change_category',
            id: active.id as string,
            newCategory: over.data.current ? over.data.current.category : null,
          });
        }

        console.log(active);
      }}
    >
      <div className="grid grid-cols-3 ">
        <Droppable id="toDos" data={{ category: 'toDo' }}>
          <TaskElements category={'toDo'} />
        </Droppable>
        <Droppable id="inProgress" data={{ category: 'inProgress' }}>
          <TaskElements category={'inProgress'} />
        </Droppable>
        <Droppable id="done" data={{ category: 'done' }}>
          <TaskElements category={'done'} />
        </Droppable>
      </div>

      <button className="fixed bg-gray-300 h-16 w-16 rounded-full text-white bottom-16 right-4 ">
        Add
      </button>
    </DndContext>
  );
};

export default Board;
