import { tasksReducer } from '@/lib/functions';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Reducer, useReducer, useState } from 'react';
import { KanbanCard, TaskAction } from '..';
import { DraggableItem } from '../dnd/Draggable';
import { Droppable } from '../dnd/Droppable';
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
  const TaskCard: React.FC<{ task: KanbanCard }> = (props) => {
    const { task } = { ...props };

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
          <button
            className="p-2"
            onClick={() => dispatch({ type: 'remove', id: task.id })}
          >
            Remove
          </button>
        </div>
      </DraggableItem>
    );
  };
  const TaskElements: React.FC<{ progress: string }> = ({ progress }) => {
    const filtredTasks = tasks.filter((task) => task.progress === progress);
    const elements = filtredTasks.map((task) => {
      return <TaskCard task={task} key={task.id} />;
    });
    return <div className="flex flex-col gap-2 p-2 w-full">{elements}</div>;
  };
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
            <TaskElements progress={'toDo'} />
          </Droppable>
        </div>
        <div>
          <h3>In Progress</h3>
          <Droppable id="inProgress" data={{ progress: 'inProgress' }}>
            <TaskElements progress={'inProgress'} />
          </Droppable>
        </div>
        <div>
          <h3>Done</h3>

          <Droppable id="done" data={{ progress: 'done' }}>
            <TaskElements progress={'done'} />
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
