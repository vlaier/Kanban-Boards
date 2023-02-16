import { DndContext } from '@dnd-kit/core';
import { Reducer, useReducer, useState } from 'react';
import { DraggableItem } from '../dnd/Draggable';
import { Droppable } from '../dnd/Droppable';
import { ITaskCard, mockBasicBoardProps } from './Board.mocks';

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
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 px-16">
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
