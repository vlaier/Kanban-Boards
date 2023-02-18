import { useDroppable } from '@dnd-kit/core';

export const Droppable: React.FC<{
  children: React.ReactNode;
  id: string;
  data: object;
}> = ({ children, id, data }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data,
  });

  return (
    <div
      ref={setNodeRef}
      className={`${
        isOver
          ? 'border bg-gray-200 border-gray-600/80 dark:bg-slate-400'
          : 'border bg-gray-50 border-gray-200 dark:border-slate-600 dark:bg-slate-500'
      }   bg-gray-300 rounded-lg flex items-center justify-center h-fit`}
    >
      {children}
    </div>
  );
};
