"use client"
import Button from "../ui/Button";
import type { Product } from "@/types/product";
import {useCart} from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  id?: number;
  className?: string;
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({ id, onClick, disabled, isLoading, className, product, quantity }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart(product, quantity),
    onClick?.();
  }
  return (
    <Button id = {id?.toString()}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`bg-accent hover:bg-accent-hover text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-200 ${className ?? ""}`}
    >
      <ShoppingCart size={16} />
      {isLoading ? "Adding..." : "Add to Cart"}
  </Button>
  );
}
