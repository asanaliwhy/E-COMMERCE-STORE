"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "@/types/product";

interface WishlistState {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (product: Product) => set((state) => {
        if (state.items.some((item) => item.id === product.id)) return state;
        return { items: [...state.items, product] }
      }),
      removeFromWishlist: (productId: number) => set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
      isInWishlist: (productId: number) => {
        return get().items.some((item) => item.id === productId);
      },

      toggleWishlist: (product: Product) => {
        const { items, isInWishlist } = get();

        if (isInWishlist(product.id)) {
          // Remove from wishlist
          set({
            items: items.filter((item) => item.id !== product.id),
          });
        } else {
          // Add to wishlist
          set({
            items: [...items, product],
          });
        }
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
