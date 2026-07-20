import Link from "next/link";
import { Heart } from 'lucide-react';

interface WishlistButtonProps{
    count: number;
}

export default function WishlistButton({count}: WishlistButtonProps) {
  const displayCount: string | number = count > 99 ? "99+" : count;
  return (
    <Link href="/wishlist" className="relative flex items-center justify-center w-10 h-10 rounded-[var(--radius)] text-muted hover:text-foreground hover:bg-surface-secondary transition-all duration-200" aria-label={`Shopping cart (${count === 1
    ? "Wishlist (1 item)"
    : `Wishlist (${count} items)`
  });`}>
      <Heart size={20} aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full shadow-sm">
          {displayCount}
        </span>
      )}
    </Link>
  );
}
