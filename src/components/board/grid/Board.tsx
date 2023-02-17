import { tasksReducer } from '@/lib/functions';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Reducer, useReducer, useState } from 'react';
import { KanbanCard, TaskAction } from '..';

import { Droppable } from '../dnd/Droppable';
import { Category } from '../section/Category';
import { mockBasicBoardProps } from './Board.mocks';

const Board: React.FC<KanbanCard[]> = (props) => {
  const [tasks, dispatch] = useReducer<Reducer<KanbanCard[], TaskAction>>(
    tasksReducer,
    mockBasicBoardProps.base
  );

  const [newTask, setNewTask] = useState<KanbanCard>({
    id: 'uniqueId',
    title: 'new Task',
    progress: 'toDo',
    isPriority: false,
    blockedTasks: [],
    description: 'This tasked was just created',
    tags: [],
    timeRequired: 1,
  });
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <DndContext
      onDragEnd={({ over, active }) => {
        if (over) {
          dispatch({
            type: 'update_progress',
            id: active.id as string,
            updatedProgress: over.data.current
              ? over.data.current.progress
              : null,
          });
        }
      }}
      sensors={sensors}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 px-16">
        <div>
          <h3>Planned</h3>
          <Droppable id="toDos" data={{ progress: 'toDo' }}>
            <Category progress={'toDo'} tasks={tasks} dispatch={dispatch} />
          </Droppable>
        </div>
        <div>
          <h3>In Progress</h3>
          <Droppable id="inProgress" data={{ progress: 'inProgress' }}>
            <Category
              progress={'inProgress'}
              tasks={tasks}
              dispatch={dispatch}
            />
          </Droppable>
        </div>
        <div>
          <h3>Done</h3>

          <Droppable id="done" data={{ progress: 'done' }}>
            <Category progress={'done'} tasks={tasks} dispatch={dispatch} />
          </Droppable>
        </div>
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
          required
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
          placeholder="progress"
          value={newTask.progress}
          onChange={(e) => {
            setNewTask((prev) => {
              return { ...prev, progress: e.target.value };
            });
          }}
        />
        <button
          type="submit"
          disabled={false}
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
