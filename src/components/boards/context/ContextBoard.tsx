import BasicBoard from '../basic/BasicBoard';
import { useBoardState } from '../BoardContext';
const ContextBoard: React.FC = () => {
  const { state } = useBoardState();

  return <BasicBoard {...state} />;
};

export default ContextBoard;
