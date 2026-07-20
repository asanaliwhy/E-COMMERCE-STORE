import type { Product } from "@/types/product";
import { Star, CheckCircle } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

function StarRating({ rate, count }: { rate: number; count: number }) {
  const fullStars = Math.floor(rate);
  const hasHalf = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={16} className="fill-amber-400 text-amber-400" />
        ))}
        {hasHalf && (
          <div className="relative">
            <Star size={16} className="text-border" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star size={16} className="fill-amber-400 text-amber-400" />
            </div>
          </div>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-border" />
        ))}
      </div>
      <span className="text-sm font-bold text-foreground">{rate}</span>
      <span className="text-sm text-muted">({count} reviews)</span>
    </div>
  );
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <>
      {/* Category badge */}
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-secondary text-[11px] font-semibold tracking-widest text-muted uppercase border border-border/50 w-fit">
        {product.category}
      </span>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
        {product.title}
      </h1>

      {/* Rating */}
      <StarRating rate={product.rating.rate} count={product.rating.count} />

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl md:text-4xl font-extrabold text-accent tracking-tight">
          ${product.price}
        </span>
        {product.discount && (
          <span className="text-lg text-muted line-through">
            ${(product.price / (1 - product.discount.percentage / 100)).toFixed(2)}
          </span>
        )}
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 text-success">
        <CheckCircle size={16} />
        <span className="text-sm font-semibold">In Stock</span>
      </div>

      {/* Description */}
      <div className="border-t border-border pt-5 mt-1">
        <p className="text-sm text-muted leading-relaxed">
          {product.description}
        </p>
      </div>
    </>
  );
}
