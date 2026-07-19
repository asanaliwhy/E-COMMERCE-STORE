// Custom hook wrapper for cart store state
export function useCart() {
  // Real implementation can wire up zustand / localStorage / context
  return {
    items: [],
    itemCount: 0,
    total: 0,
    addToCart: (productId: number, quantity: number) => {
      console.log(`Product ${productId} added with quantity ${quantity}`);
    },
    removeFromCart: (productId: number) => {
      console.log(`Product ${productId} removed`);
    },
    clearCart: () => {
      console.log("Cart cleared");
    },
  };
}
