import { useSortable } from "@dnd-kit/sortable";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Editnote } from "@/components/EditNote";
import { SortableNotesProps } from "@/interfaces/SortableNotesProps";
import Link from "next/link";

export function SortNotes({id,note,deleteNote,updateNote,}: SortableNotesProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =useSortable({ id });
  const transformStyle = transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)`: undefined;

  return (
    <div
      ref={setNodeRef}
      style={{ transform: transformStyle, transition }}
      {...attributes}
      {...listeners}
      className="p-3 border rounded-md flex flex-wrap items-center justify-between gap-x-2 gap-y-1"
    >
      <Checkbox />

      <Link href={`/notes/${id}`} className="min-w-0 flex-1">
        <span className="cursor-pointer hover:underline">{note}</span>
      </Link>

      <div className="flex gap-2">
        <Editnote
          note={note}
          updateNote={(newNote) => updateNote(note, newNote)}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => deleteNote(note)}
        >
          <Trash size={16} className="text-red-500" />
        </Button>
      </div>
    </div>
  );
}
