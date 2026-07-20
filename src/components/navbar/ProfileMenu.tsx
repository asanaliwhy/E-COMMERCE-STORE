import Link from "next/link";
import { User, LogIn } from 'lucide-react';

interface ProfileMenuProps {
  isLoggedIn: boolean;
  username?: string;
}

export default function ProfileMenu({ isLoggedIn, username }: ProfileMenuProps) {
  return (
    <div>
      {isLoggedIn ? (
        <Link href="/profile" className="flex items-center justify-center w-10 h-10 rounded-[var(--radius)] text-muted hover:text-foreground hover:bg-surface-secondary transition-all duration-200" aria-label={`Profile of  (${username})`}>
          <User size={20} aria-hidden="true" />
        </Link>
      ) : (
        <Link href="/login" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-[var(--radius)] border border-border text-foreground hover:bg-surface-secondary transition-all duration-200" aria-label="login">
          <LogIn size={16} aria-hidden="true" />
          Login
        </Link>
      )}
    </div>
  );
}
