import { IBaseTemplate } from '..';
const BaseTemplate: React.FC<IBaseTemplate> = (props) => {
  const { sampleTextProp } = { ...props };
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
