interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, max = 10 }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-neutral-300 rounded-md w-fit">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= 1}
        className="px-3 py-1.5 hover:bg-neutral-50 active:bg-neutral-100 disabled:opacity-50 text-neutral-600 transition-colors"
      >
        -
      </button>
      <span className="px-4 py-1.5 text-sm font-medium text-neutral-900 min-w-8 text-center select-none">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="px-3 py-1.5 hover:bg-neutral-50 active:bg-neutral-100 disabled:opacity-50 text-neutral-600 transition-colors"
      >
        +
      </button>
    </div>
  );
}
