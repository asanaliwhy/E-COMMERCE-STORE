import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface CartButtonProps
{
  count: number;
}
export default function CartButton({count}: CartButtonProps) {
  const displayCount: string | number = count > 99 ? "99+" : count;
  return (
    <Link href="/cart" className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors" aria-label={`Shopping cart (${count} items)`}>
      <ShoppingCart size={25} aria-hidden="true"/>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold text-white bg-blue-600 rounded-full">
          {displayCount}
        </span>
      )}
    </Link>
  );
}
