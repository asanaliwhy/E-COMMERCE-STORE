import type { CartItem }  from "@/types/cart";
import ProductImage from "../product/ProductImage";
import Link from "next/link";
import QuantitySelector from "../product/QuantitySelector";
import { Trash2 } from "lucide-react";

interface CartItemProps {
    item: CartItem, 
    handleIncrease: (id: number) => void, 
    handleDecrease: (id: number) => void, 
    handleRemove: (id: number) => void
}


export default function CartItemCard ({item, handleIncrease, handleDecrease, handleRemove}: CartItemProps ){
  return (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 px-5 sm:px-6 py-5 hover:bg-surface-secondary/50 transition-colors duration-200">
  {/* Product Image */}
  <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
    <ProductImage
      image={item.product.images[0]}
      title={item.product.title}
      width={120}
      height={120}
      className="!rounded-[var(--radius)] !aspect-square w-24 h-24 !p-3 border-border/30"
    />
  </Link>

  {/* Product Info & Controls */}
  <div className="flex-1 w-full">
    <div className="flex justify-between mb-3">
      {/* Product Details */}
      <div className="space-y-1">
        <Link href={`/products/${item.product.id}`} className="block">
          <h3 className="text-sm font-semibold text-foreground hover:text-accent transition-colors duration-200 line-clamp-2">
            {item.product.title}
          </h3>
        </Link>
        <p className="text-xs text-muted capitalize">
          {item.product.category}
        </p>
        <p className="text-sm text-foreground font-semibold">
          ${item.product.price.toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleRemove(item.product.id)}
        className="text-muted hover:text-danger transition-colors duration-200 p-1.5 rounded-[var(--radius-sm)] hover:bg-red-50 dark:hover:bg-red-950/20 self-start cursor-pointer"
      aria-label={`Remove ${item.product.title} from cart`}>
        <Trash2 className="w-4 h-4" />
      </button>
    </div>

    {/* Quantity Selector & Total Price */}
    <div className="flex items-center justify-between">
      <QuantitySelector
        quantity={item.quantity}
        onChange={(newQuantity) => {
          if (newQuantity < item.quantity) {
            handleDecrease(item.product.id);
          } else if (newQuantity > item.quantity) {
            handleIncrease(item.product.id);
          }
        }}
        min={1}
        max={99}
      />
      <span className="text-base font-bold text-foreground tabular-nums">
        ${(item.product.price * item.quantity).toFixed(2)}
      </span>
    </div>
  </div>
</div>
  )
}
