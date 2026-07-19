// Custom hook wrapper for wishlist store state
export function useWishlist() {
  return {
    wishlist: [],
    isInWishlist: (productId: number) => false,
    toggleWishlist: (productId: number) => {
      console.log(`Toggled product ${productId} in wishlist`);
    },
  };
}
