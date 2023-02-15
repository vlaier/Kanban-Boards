import { useState } from 'react';
import { ITaskCard } from '..';
const TaskCard: React.FC<ITaskCard> = (props) => {
  const { title, description = '' } = { ...props };
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div className="bg-gray-300/80 dark:bg-slate-500/80 backdrop-blur h-64 rounded-xl py-8 px-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>
        {isEdited ? (
          <input type="text" value={description} />
        ) : (
          <p>{description}</p>
        )}
      </div>

      <button
        className="py-3 px-5 border-gray-500 text-gray-500 border rounded-full hover:border-gray-400 hover:text-gray-400"
        onClick={() => setIsEdited((prevValue) => !prevValue)}
      >
        Edit
      </button>
    </div>
  );
};

export default TaskCard;
