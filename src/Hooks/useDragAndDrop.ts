import { useCallback } from "react";
import {DndContext,KeyboardSensor,PointerSensor,useSensor,useSensors,DragEndEvent,} from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";

export function useDragAndDrop(setItems: (updateFn: (items: string[]) => string[]) => void) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        setItems((items: string[]) => {
          const oldIndex = items.indexOf(active.id as string);
          const newIndex = items.indexOf(over?.id as string);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    },
    [setItems],
  );

  return { sensors, handleDragEnd, DndContext, SortableContext, verticalListSortingStrategy };
}