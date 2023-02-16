import { useDraggable } from '@dnd-kit/core';

export const DraggableItem: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => {
  const { isDragging, setNodeRef, listeners, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      className="border-green-300 border-2 w-fit flex items-center justify-center bg-purple-400/80"
    >
      {children}
    </div>
  );
};
