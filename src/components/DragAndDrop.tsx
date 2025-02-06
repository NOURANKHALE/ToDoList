import { DndContext, closestCenter } from "@dnd-kit/core";
import {SortableContext,verticalListSortingStrategy,} from "@dnd-kit/sortable";
import { SortNotes } from "@/components/SortNotes";
import { DragAndDropProps } from "@/interfaces/DragAndDropProps";

export function DragAndDrop({items,sensors,handleDragEnd,deleteNote,updateNote,}: DragAndDropProps) {
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="NoteLists space-y-2">
          {items.map((note) => (
            <SortNotes
              key={note}
              id={note}
              note={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
