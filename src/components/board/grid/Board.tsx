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

  const [newTask, setNewTask] = useState({
    id: 'uniqueId',
    title: 'new Task',
    category: 'toDo',
  });
  const TaskElements: React.FC<{ category: string }> = ({ category }) => {
    const filtredTasks = tasks.filter((task) => task.category === category);
    const elements = filtredTasks.map((task) => {
      return (
        <DraggableItem id={task.id} key={task.id}>
          <div className="bg-gray-500/80 backdrop-blur-md w-60 prose flex flex-col p-4 rounded-lg">
            <h3>{task.title}</h3>
            {task.description && <p>{task.description}</p>}
            <span>{task.category}</span>
          </div>
        </DraggableItem>
      );
    });
    return <div className="flex flex-col gap-2">{elements}</div>;
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
      <form className="flex flex-col p-8 bg-gray-300 rounded-lg gap-4">
        <input
          required={true}
          type="text"
          placeholder="id"
          value={newTask.id}
          onChange={(e) => {
            setNewTask((prev) => {
              return { ...prev, id: e.target.value };
            });
          }}
        />
        <input
          type="text"
          placeholder="title"
          value={newTask.title}
          onChange={(e) => {
            setNewTask((prev) => {
              return { ...prev, title: e.target.value };
            });
          }}
        />
        <input
          type="text"
          placeholder="category"
          value={newTask.category}
          onChange={(e) => {
            setNewTask((prev) => {
              return { ...prev, category: e.target.value };
            });
          }}
        />
        <button
          className=" bg-gray-600 h-16 w-16 rounded-full text-white "
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'add', task: newTask });
          }}
        >
          Add
        </button>
      </form>
      <button
        className="fixed bg-gray-300 h-16 w-16 rounded-full text-white bottom-16 right-4 "
        onClick={() => dispatch({ type: 'add', task: newTask })}
      >
        Add
      </button>
    </DndContext>
  );
};

export default Board;
