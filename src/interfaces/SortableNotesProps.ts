export interface SortableNotesProps {
  id: string;
  note: string;
  deleteNote: (note: string) => void;
  updateNote: (oldNote: string, newNote: string) => void;
}