"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SearchBarProps } from "@/interfaces/SearchBarProps";

export function SearchBar({searchTerm,suggestions,onSearchChange,onSelectSuggestion,}: SearchBarProps) {
    const router = useRouter();
    const handleSearchClick = () => {
    router.push("../app/not-found.tsx");
  };
  return (
    <div className="search w-full relative">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search note..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full p-2 pr-10 border rounded-md"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={handleSearchClick}
        >
          <Search size={18} />
        </button>
      </div>
      {suggestions.length > 0 && (
        <div className="absolute left-0 w-full mt-1  z-10">
          {suggestions.map((note, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:bg-violet-600 p-2"
              onClick={() => onSelectSuggestion(note)}
            >
              <CardContent>{note}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
