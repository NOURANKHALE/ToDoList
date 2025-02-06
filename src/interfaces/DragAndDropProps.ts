import { DragEndEvent, useSensors } from "@dnd-kit/core";
export interface DragAndDropProps {
    items: string[];
    sensors: ReturnType<typeof useSensors>;
    handleDragEnd: (event: DragEndEvent) => void;
    deleteNote: (note: string) => void;
    updateNote: (oldNote: string, newNote: string) => void;
  }