"use client";
import { useState } from "react";
import { useNotes } from "@/Hooks/useNotes";

export function useSearch() {
  const { notes, setSearchTerm, searchTerm } = useNotes();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    setSuggestions(
      value ? notes.filter((note) => note.toLowerCase().includes(value.toLowerCase())) : []
    );
  };

  const handleSelectSuggestion = (note: string) => {
    setSearchTerm(note);
    setSuggestions([]);
  };

  return { searchTerm, handleInputChange, suggestions, handleSelectSuggestion };
}