import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
  min?: number;
}

export default function QuantitySelector({ quantity = 1, onChange, max = 99, min=1}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-border rounded-[var(--radius)] overflow-hidden bg-surface">
      <button
        type="button"
        className="cursor-pointer px-3.5 py-3 text-muted hover:text-foreground hover:bg-surface-secondary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={quantity <= min}
        onClick={()=>{if(quantity > min){onChange(quantity - 1)}}}
      >
        <Minus size={14} />
      </button>
      <span className="w-12 text-center text-sm font-bold text-foreground tabular-nums border-x border-border py-3 bg-surface-secondary/30">
        {quantity}
      </span>
      <button
        type="button"
        disabled={quantity >= max}
        className="cursor-pointer px-3.5 py-3 text-muted hover:text-foreground hover:bg-surface-secondary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={()=>{if(quantity < max){onChange(quantity + 1)}}}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}