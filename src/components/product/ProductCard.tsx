import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../ui/FavoriteButton";
import {useWishlist} from "@/hooks/useWishlist";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const {isInWishlist, toggleWishlist} = useWishlist()

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex h-full flex-col bg-surface rounded-[var(--radius-lg)] border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-border/80 hover:-translate-y-1.5"
    >
      {/* Image Container — always white so product photos pop */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div className="absolute inset-0 bg-image-bg" />
        <Image
          src={product.images?.at(0) ?? "/placeholder.png"}
          alt={product.title}
          fill
          className="object-contain p-6 relative z-[1] transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Favorite button — always visible */}
        <div 
          className="absolute top-3 right-3 z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <FavoriteButton isFavorite={isInWishlist(product.id)} onToggle={()=>{toggleWishlist(product)}}/>
        </div>

        {/* Quick add hover overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground/90 backdrop-blur-sm text-background text-xs font-bold uppercase tracking-wider rounded-[var(--radius)]"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ShoppingCart size={14} />
            Quick View
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <p className="text-[11px] font-semibold text-muted uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-foreground tracking-tight line-clamp-2 leading-snug group-hover:text-accent transition-colors duration-200">
          {product.title}
        </h3>
        
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground tracking-tight">
            ${product.price}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">{product.rating.rate}</span>
            <span>({product.rating.count})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}