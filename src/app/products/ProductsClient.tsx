"use client";

import { useState, useCallback } from "react";
import SearchBar from "@/components/navbar/SearchBar";
import ProductGrid from "@/components/product/ProductGrid";
import { applyFiltersAndSort, defaultFilters, FilterState } from "@/lib/productFilters";
import type { Product } from "@/types/product";
import ProductSort from "@/components/product/ProductSort";
import CategoryFilter from "@/components/product/CategoryFilter";
import PriceFilter from "@/components/product/PriceFilter";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { SlidersHorizontal, X } from "lucide-react";

interface Props {
  products: Product[];
}

export default function ProductsClient({ products }: Props) {
  const [filters, setFilters] = useState(defaultFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  const handleSearch = useCallback((value: string) => {
    setFilters((prev) => {
      if (prev.search === value) return prev;
      return { ...prev, search: value };
    });
  }, []);

  const removeFilter = (key: keyof FilterState, defaultValue: any) => {
    setFilters((prev) => ({ ...prev, [key]: defaultValue }));
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.category !== "All" ||
    filters.minPrice !== 0 ||
    filters.maxPrice !== 0 ||
    filters.sortBy !== "featured";

  const categories = [...new Set(products.map((product) => product.category))];
  const filteredProducts = applyFiltersAndSort(products, filters);
  const totalProducts = products.length;
  const visibleProducts = filteredProducts.length;

  return (
    <main className="flex-1 py-8 bg-background">
      <Container>
        {/* Page Title */}
        <div className="mb-8 border-b border-border/40 pb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Our Catalog
          </h1>
          <p className="text-xs md:text-sm text-muted mt-1">
            Browse through our premium selection of authentic products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* DESKTOP SIDEBAR FILTERS (Left 1/4) */}
          <aside className="hidden lg:flex flex-col gap-8 w-64 shrink-0 lg:sticky lg:top-24 bg-surface p-6 rounded-[var(--radius-lg)] border border-border/40 shadow-sm">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-accent" />
                Filters
              </h2>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] font-bold text-accent hover:text-accent-hover uppercase tracking-wider"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted">Search</h3>
                <SearchBar
                  onSearch={handleSearch}
                  placeholder="Search products..."
                />
              </div>

              <CategoryFilter
                categories={categories}
                selectedCategory={filters.category}
                onSelectCategory={(category) => setFilters((prev) => ({ ...prev, category }))}
              />

              <PriceFilter
                minPrice={filters.minPrice}
                maxPrice={filters.maxPrice}
                onChangeMin={(value) => setFilters((prev) => ({ ...prev, minPrice: value }))}
                onChangeMax={(value) => setFilters((prev) => ({ ...prev, maxPrice: value }))}
              />
            </div>
          </aside>

          {/* MAIN CATALOG SECTION (Right 3/4) */}
          <div className="flex-1 w-full space-y-6">
            {/* Horizontal Header (Grid Options + Mobil Trigger) */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-surface p-4 border border-border/40 rounded-[var(--radius-lg)] shadow-sm">
              {/* Left Info / Mobile Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFiltersOpen((prev) => !prev)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-[var(--radius)] text-sm font-bold text-foreground hover:bg-surface-secondary transition-all"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>
                <p className="text-xs md:text-sm text-muted">
                  Showing <span className="font-semibold text-foreground">{visibleProducts}</span> of {totalProducts} products
                </p>
              </div>

              {/* Right Sort Select */}
              <div>
                <ProductSort
                  value={filters.sortBy}
                  onChange={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
                />
              </div>
            </div>

            {/* MOBILE COLLAPSIBLE FILTERS PANELS */}
            {mobileFiltersOpen && (
              <div className="lg:hidden bg-surface p-5 border border-border/40 rounded-[var(--radius-lg)] shadow-md space-y-5 animate-[fadeIn_0.2s_ease-out]">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Filter Options</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-bold text-accent hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted">Search</h4>
                    <SearchBar
                      onSearch={handleSearch}
                      placeholder="Search products..."
                    />
                  </div>

                  <CategoryFilter
                    categories={categories}
                    selectedCategory={filters.category}
                    onSelectCategory={(category) => setFilters((prev) => ({ ...prev, category }))}
                  />

                  <PriceFilter
                    minPrice={filters.minPrice}
                    maxPrice={filters.maxPrice}
                    onChangeMin={(value) => setFilters((prev) => ({ ...prev, minPrice: value }))}
                    onChangeMax={(value) => setFilters((prev) => ({ ...prev, maxPrice: value }))}
                  />
                </div>
              </div>
            )}

            {/* ACTIVE FILTERS CHIPS */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {filters.search && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border/80 text-foreground rounded-full">
                    Search: "{filters.search}"
                    <button
                      onClick={() => removeFilter("search", "")}
                      className="hover:text-danger transition-colors cursor-pointer"
                      aria-label="Remove search filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {filters.category !== "All" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border/80 text-foreground rounded-full">
                    Category: {filters.category}
                    <button
                      onClick={() => removeFilter("category", "All")}
                      className="hover:text-danger transition-colors cursor-pointer"
                      aria-label="Remove category filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {(filters.minPrice > 0 || filters.maxPrice > 0) && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border/80 text-foreground rounded-full">
                    Price: {filters.minPrice > 0 ? `$${filters.minPrice}` : "$0"} – {filters.maxPrice > 0 ? `$${filters.maxPrice}` : "Any"}
                    <button
                      onClick={() => {
                        setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 0 }));
                      }}
                      className="hover:text-danger transition-colors cursor-pointer"
                      aria-label="Remove price filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* GRID PRODUCTS */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-surface border border-border/40 rounded-[var(--radius-lg)]">
                <h2 className="text-xl font-bold text-foreground">No Products Found</h2>
                <p className="mt-2 text-sm text-muted max-w-sm mx-auto">
                  We couldn't find any products matching your current filters. Try resetting them or typing a different search query.
                </p>
                <Button onClick={handleResetFilters} className="mt-6 px-6 py-2.5 text-xs font-bold uppercase tracking-wider">
                  Reset Filters
                </Button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}