import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { EditNoteProps } from "@/interfaces/EditNoteProps";
import { useEditNote } from "@/Hooks/useEditNote";

export function Editnote({ note, updateNote }: EditNoteProps) {
  const { editedNote, setEditedNote, isOpen, setIsOpen, handleUpdate } = useEditNote(note);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
        </DialogHeader>
        <Input value={editedNote} onChange={(e) => setEditedNote(e.target.value)} className="w-full" />
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => handleUpdate(updateNote)}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
