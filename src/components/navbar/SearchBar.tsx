"use client";

import { useState, useEffect } from "react";
import Input from "../ui/Input";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({onSearch, placeholder = "Search products..."}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm);
  
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);
  
  const handleLive = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
}
  return (
    <div className="relative w-full group">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
        <Search className="w-4 h-4 text-muted group-focus-within:text-accent transition-colors duration-200" aria-hidden="true" />
      </div>
      <Input
        type="search"
        value={searchTerm}
        onChange={handleLive}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 text-sm bg-surface-secondary border-transparent hover:border-border focus:bg-surface focus:border-accent"
      />
    </div>
  );
}
