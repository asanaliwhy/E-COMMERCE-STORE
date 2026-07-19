import Link from "next/link";
import { Heart } from 'lucide-react';

interface WishlistButtonProps{
    count: number;
}

export default function WishlistButton({count}: WishlistButtonProps) {
  const displayCount: string | number = count > 99 ? "99+" : count;
  return (
    <Link href="/wishlist" className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors" aria-label={`Wishlist (${count} items)`}>
      <Heart size={20} aria-hidden="true" />
      <span className="ml-2 text-sm font-medium">Wishlist</span>
      {count > 0 && (
        <span className="ml-1 inline-flex items-center justify-center w-5 h-5 px-1 text-xs font-bold text-white bg-red-600 rounded-full">
          {displayCount}
        </span>
      )}
    </Link>
  );
}
