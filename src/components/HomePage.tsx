"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { AddNote } from "@/components/AddNote";
import { useNotes } from "@/Hooks/useNotes";
import { useSearch } from "@/Hooks/useSearch";
import { SearchBar } from "@/components/SearchBar";
import { useDragAndDrop } from "@/Hooks/useDragAndDrop";
import { DragAndDrop } from "@/components/DragAndDrop";
import SelectNotes from "./SelectNotes";

export default function HomePage() {
  const {notes,filteredNotes,searchTerm,setSearchTerm,addNote,deleteNote,updateNote,setNotes,} = useNotes();
  const { suggestions, handleInputChange, handleSelectSuggestion } =useSearch();
  const { sensors, handleDragEnd } = useDragAndDrop(setNotes);

  return (
    <section className="HomePageContent p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto">
      <div className="header flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-2xl">TODO List</h1>
        <ModeToggle />
      </div>
      <div className="flex gap-2">
        <SearchBar
          searchTerm={searchTerm}
          suggestions={suggestions}
          onSearchChange={(e) => {
            setSearchTerm(e.target.value);
            handleInputChange(e);
          }}
          onSelectSuggestion={handleSelectSuggestion}
        />
        <SelectNotes
          notes={notes}
          setNotes={setNotes}
          setFilteredNotes={(notes) => setNotes(notes)}
        />
      </div>
      <DragAndDrop
        items={filteredNotes}
        sensors={sensors}
        handleDragEnd={handleDragEnd}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
      <div className="AddNote flex justify-center ">
        <AddNote onAddNote={addNote} />
      </div>
      
    </section>
  );
}
