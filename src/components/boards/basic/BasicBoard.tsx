import TaskCard from '@/components/cards/taskcard/TaskCard';
import { IBoard } from '..';
import { useBoardState } from '../BoardContext';

const BasicBoard: React.FC<IBoard> = (props) => {
  const { tasks } = { ...props };
  const { dispatch } = useBoardState();
  const tasksElement = tasks.map((task) => {
    return <TaskCard {...task} key={task.id} />;
  });
  return <div className="grid grid-cols-3 gap-4">{tasksElement}</div>;
};

export default BasicBoard;
