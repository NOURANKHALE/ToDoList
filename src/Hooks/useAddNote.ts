"use client";
import { useState } from "react";

export function useAddNote(onAddNote: (note: string) => void) {
  const [note, setNote] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const addNote = () => {
    if (!note.trim()) return;
    onAddNote(note);
    setNote("");
    setIsAdding(false);
  };

  return { note, isAdding, setNote, setIsAdding, addNote };
}