import { IBaseTemplate } from '..';
const BaseTemplate: React.FC<IBaseTemplate> = (props) => {
  const { sampleTextProp } = { ...props };
  return <div>Hello world!</div>;
};

export default BaseTemplate;
