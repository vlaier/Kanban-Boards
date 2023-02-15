import { IBoard } from '..';
const BasicBoard: React.FC<IBoard> = (props) => {
  const { id } = { ...props };
  return <div>{id}</div>;
};

export default BasicBoard;
