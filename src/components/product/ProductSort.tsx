import { SortOption } from "@/lib/productFilters";
import { ArrowUpDown } from "lucide-react";

interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <div className="flex items-center gap-2.5">
      <label htmlFor="sort" className="flex items-center gap-1.5 text-xs font-semibold uppercase text-muted whitespace-nowrap tracking-widest">
        <ArrowUpDown size={14} />
        Sort:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="bg-surface border border-border rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent cursor-pointer transition-all duration-200 appearance-none pr-8"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating">Highest Rated ⭐</option>
        <option value="name-asc">Name: A → Z</option>
      </select>
    </div>
  );
}