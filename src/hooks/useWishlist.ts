import { useWishlistStore } from "@/store/wishlistStore";

// Custom hook wrapper for wishlist store state
export function useWishlist() {
  const items = useWishlistStore((state) => state.items);
  const itemCount = items.length;
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const removeFromWishlist = useWishlistStore((state)=> state.removeFromWishlist)
  const clearWishlist = useWishlistStore((state)=> state.clearWishlist)

  return {
    wishlist: items,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
    itemCount,
    clearWishlist
  };
}
