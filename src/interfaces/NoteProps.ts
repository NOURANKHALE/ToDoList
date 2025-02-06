export interface NoteProps {
    notes: string[];
    setFilteredNotes: (notes: string[]) => void;
    setNotes: (notes: string[]) => void;  
}