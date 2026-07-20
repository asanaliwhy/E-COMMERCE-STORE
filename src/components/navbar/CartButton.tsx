import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface CartButtonProps
{
  count: number;
}
export default function CartButton({count}: CartButtonProps) {
  const displayCount: string | number = count > 99 ? "99+" : count;
  return (
    <Link href="/cart" className="relative flex items-center justify-center w-10 h-10 rounded-[var(--radius)] text-muted hover:text-foreground hover:bg-surface-secondary transition-all duration-200" aria-label={`Shopping cart (${count === 1
    ? "Cart (1 item)"
    : `Cart (${count} items)`}`}>
      <ShoppingCart size={20} aria-hidden="true"/>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-accent-foreground bg-accent rounded-full shadow-sm animate-[fadeIn_0.2s_ease-out]">
          {displayCount}
        </span>
      )}
    </Link>
  );
}
