import BasicBoard from '../basic/BasicBoard';
import { useBoardState } from '../BoardContext';
const ContextBoard: React.FC = () => {
  const { tasks, id } = useBoardState();
  const props = { tasks, id };
  return <BasicBoard {...props} />;
};

export default ContextBoard;
