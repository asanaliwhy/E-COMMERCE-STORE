import Link from "next/link";
import { User } from 'lucide-react';

interface ProfileMenuProps {
  isLoggedIn: boolean;
  username?: string;
}

export default function ProfileMenu({ isLoggedIn, username }: ProfileMenuProps) {
  return (
    <div>
      {isLoggedIn ? (
        <Link href="/profile" className="flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 focus:outline-none transition-colors" aria-label={`Profile of  (${username})`}>
          <User size={20} className="mr-2" aria-hidden="true" />
          {username}
        </Link>
      ) : (
        <Link href="/login" className="flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 focus:outline-none transition-colors" aria-label= "login">
          Login
        </Link>
      )}
    </div>
  );
}
