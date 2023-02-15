import TaskCard from '@/components/cards/taskcard/TaskCard';
import { IBoard } from '..';
const BasicBoard: React.FC<IBoard> = (props) => {
  const { tasks } = { ...props };
  const toDos = tasks.filter((task) => {
    return task.stage === 'toDo';
  });
  const inProgress = tasks.filter((task) => {
    return task.stage === 'inProgress';
  });
  const done = tasks.filter((task) => {
    return task.stage === 'done';
  });
  return (
    <div className="grid grid-cols-3 gap-4">
      <div id="todo" className=" flex flex-col gap-2">
        <h3>To do</h3>
        {toDos.map((task) => {
          return <TaskCard {...task} key={task.id} />;
        })}
      </div>
      <div id="inprogress">
        <h3>In progress</h3>
        {inProgress.map((task) => {
          return <TaskCard {...task} key={task.id} />;
        })}
      </div>
      <div id="done">
        <h3>Done</h3>
        {done.map((task) => {
          return <TaskCard {...task} key={task.id} />;
        })}
      </div>
    </div>
  );
};

export default BasicBoard;
