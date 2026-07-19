import type { Address } from "./user";


export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export interface OrderItem {
  productId: number;
  quantity: number;
  priceAtPurchase: number; // Historical ledger snapshot
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress?: Address;
  deliveryDate?: string;
  createdAt: string;
}