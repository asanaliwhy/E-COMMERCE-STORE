import Link from "next/link";

export default function WishlistButton() {
  return (
    <Link href="/wishlist" className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors">
      <span className="sr-only">Wishlist</span>
      Wishlist
    </Link>
  );
}
