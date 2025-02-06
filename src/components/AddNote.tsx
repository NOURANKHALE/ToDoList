import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {Dialog,DialogTrigger,DialogContent,DialogHeader,DialogTitle,DialogFooter,} from "@/components/ui/dialog";
import { useAddNote } from "@/Hooks/useAddNote";
import { AddNoteProps } from "@/interfaces/AddNoteProps";

export function AddNote({ onAddNote }: AddNoteProps) {
  const { note,isAdding,setNote,setIsAdding,addNote } = useAddNote(onAddNote);
  
  return (
    <Dialog open={isAdding} onOpenChange={setIsAdding}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 rounded-lg">
          <Plus size={18} /> 
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
        </DialogHeader>
        <Input className="w-full"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note here..."
        />
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
          <Button onClick={addNote}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
