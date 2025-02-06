"use client";
import { useState } from "react";

export function useNotes() {
  const [notes, setNotes] = useState<string[]>(["Note1", "Note2", "Note3"]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNote = (newNote: string) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (note: string) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n !== note));
  };

  const updateNote = (oldNote: string, newNote: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note === oldNote ? newNote : note))
    );
  };

  return {notes,filteredNotes,searchTerm,setSearchTerm,addNote,deleteNote,updateNote,setNotes,};
}
