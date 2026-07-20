import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
  username: string;
  email: string;
}

export interface OrderItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: "Processing" | "Shipped" | "Delivered";
}

interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  orders: Order[];
  login: (email: string, username: string) => void;
  logout: () => void;
  register: (email: string, username: string) => void;
  addOrder: (orderItems: OrderItem[], total: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      orders: [],
      login: (email, username) => set({ isLoggedIn: true, user: { email, username } }),
      logout: () => set({ isLoggedIn: false, user: null, orders: [] }),
      register: (email, username) => set({ isLoggedIn: true, user: { email, username } }),
      addOrder: (orderItems, total) => set((state) => {
        const newOrder: Order = {
          id: Math.floor(100000 + Math.random() * 900000).toString(),
          date: new Date().toLocaleDateString(),
          items: orderItems,
          total: total,
          status: "Processing",
        };
        return { orders: [newOrder, ...state.orders] };
      }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
