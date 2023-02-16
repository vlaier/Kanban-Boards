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
          ? 'border-2 bg-gray-300 border-gray-600/80'
          : 'border border-gray-200'
      } h-32 w-64 bg-gray-200 rounded-lg flex items-center justify-center`}
    >
      {children}
    </div>
  );
};