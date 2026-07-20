import { Product } from "@/types/product";

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name-asc";

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: SortOption;
  search: string;
}
export const defaultFilters: FilterState = {
  search: "",
  category: "All",
  minPrice: 0,
  maxPrice: 0,
  sortBy: "featured",
};
/**
 * Sorts products without mutating the original array.
 */
export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

/**
 * Filters products by Category and Price Range.
 */
export function filterProducts(
  products: Product[],
  filters: Omit<FilterState, "sortBy">
): Product[] {
  return products.filter((product) => {
    const category = product.category;

    // Search
    if (
      filters.search &&
      !product.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !category.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Category
    if (
      filters.category &&
      filters.category !== "All" &&
      category.toLowerCase() !== filters.category.toLowerCase()
    ) {
      return false;
    }

    // Min price
    if (
      filters.minPrice > 0 &&
      product.price < filters.minPrice
    ) {
      return false;
    }

    // Max price
    if (
      filters.maxPrice > 0 &&
      product.price > filters.maxPrice
    ) {
      return false;
    }

    return true;
  });
}

/**
 * Combines filtering and sorting in a single pipeline.
 */
export function applyFiltersAndSort(products: Product[], filters: FilterState): Product[] {
  const filtered = filterProducts(products, filters);
  return sortProducts(filtered, filters.sortBy);
}