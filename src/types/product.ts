// 1. Core Utilities & Sub-types

export interface Rating {
  rate: number;
  count: number;
}

export interface Discount {
  id: number;
  percentage: number;
  startDate: string; // ISO 8601
  endDate: string;   // ISO 8601
}

export interface Product {
  id: number;         // Essential for inventory/skipping database clutter
  title: string;
  price: number;
  category: string;
  rating: Rating;
  images: string[];    // First element serves as the primary thumbnail
  description: string;      // Public frontend handles availability via stock > 0
  sizes?: string[];
  discount?: Discount;
}
