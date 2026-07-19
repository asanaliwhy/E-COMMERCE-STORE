"use client"
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';


export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors" onClick = {() => setIsDark((prev)=> !prev)} aria-label="Toggle theme" aria-pressed= {isDark}>
      {isDark ? <Moon size={20}/> : <Sun size={20}/>}
    </Button>
  );
}