import { DollarSign } from "lucide-react";

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onChangeMin: (val: number) => void;
  onChangeMax: (val: number) => void;
}

export default function PriceFilter({
  minPrice,
  maxPrice,
  onChangeMin,
  onChangeMax,
}: PriceFilterProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted">Price Range</h3>
      <div className="flex items-center gap-3">
        {/* Min Input Wrapper */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted">
            $
          </span>
          <input
            type="number"
            placeholder="Min"
            value={minPrice || ""}
            onChange={(e) => onChangeMin(e.target.value === "" ? 0 : Number(e.target.value))}
            className="w-full bg-surface border border-border/80 rounded-[var(--radius)] pl-6 pr-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all duration-200"
          />
        </div>

        <span className="text-muted/60 font-medium text-xs shrink-0">–</span>

        {/* Max Input Wrapper */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted">
            $
          </span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice || ""}
            onChange={(e) => onChangeMax(e.target.value === "" ? 0 : Number(e.target.value))}
            className="w-full bg-surface border border-border/80 rounded-[var(--radius)] pl-6 pr-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}