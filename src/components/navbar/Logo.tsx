import  Link from "next/link";
import { Package } from "lucide-react";

interface LogoProps {
    className?: string;
}

export default function Logo({className}: LogoProps) {
  return (
      <Link aria-label="Home" href="/" className={`flex items-center gap-2.5 group ${className ?? ""}`}>
        <div className="flex items-center justify-center w-9 h-9 rounded-[var(--radius)] bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-105">
          <Package size={18} />
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">Shop<span className="text-accent">Next</span></span>
      </Link>
  );
}
