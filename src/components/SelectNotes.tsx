import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NoteProps } from "@/interfaces/NoteProps";

const SelectNotes = ({ notes, setFilteredNotes }: NoteProps) => {
  const handleChange = (value: string) => {
    setFilteredNotes(
      value === "All" ? notes : notes.map((note) => (note === value ? `⭐ ${note}` : note))
    );
  };

  return (
    <Select onValueChange={handleChange} >
      <SelectTrigger className="w-32">
        <SelectValue placeholder="All"  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">All</SelectItem>
          {notes.map((note) => (
            <SelectItem 
              key={note} 
              value={note}
              className={`p-2 border rounded-md mb-2 transition border-violet-500 ${notes.includes(note) ? "shadow-md" : ""}`}
            >
                  {note}
              </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectNotes;
