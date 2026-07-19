"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import {Search} from "lucide-react";
import type { FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({onSearch, placeholder = "Search products..."}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const query = searchTerm.trim();
  if (!query) return;
  onSearch(query);
  setSearchTerm(query);
}
  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <Input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-3 pr-10 py-1.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <Button aria-label="Search" type="submit" className="absolute right-0 top-0 h-full w-10">
        <Search className="w-5 h-5 text-neutral-600" aria-hidden="true" />
      </Button>
    </form>
  );
}
