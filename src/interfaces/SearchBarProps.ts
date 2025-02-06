export interface SearchBarProps {
    searchTerm: string;
    suggestions: string[];
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectSuggestion: (note: string) => void;
  }