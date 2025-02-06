"use client";
import { useState, useEffect } from "react";

export function useEditNote(initialNote: string) {
  const [editedNote, setEditedNote] = useState(initialNote);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setEditedNote(initialNote); 
  }, [initialNote]);

  const handleUpdate = (updateNote: (oldNote: string, newNote: string) => void) => {
    updateNote(initialNote, editedNote); 
    setIsOpen(false);
  };

  return { editedNote, setEditedNote, isOpen, setIsOpen, handleUpdate };
}
