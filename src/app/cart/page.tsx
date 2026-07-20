"use client";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import CartItemCard from "@/components/cart/CartItem";
import Container from "@/components/layout/Container";

export default function CartPage() {
  const { items, itemCount, total, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const handleClear = () => {
    if (window.confirm(`Are you sure you want to remove all ${itemCount} items from your cart?`)) {
      clearCart();
    }
  };

  if (itemCount === 0) {
    return (
      <main className="flex-1 py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-md mx-auto text-center py-16 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center text-muted">
              <ShoppingBag size={28} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Your Cart is Empty</h1>
              <p className="text-sm text-muted">
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full px-8 py-3 uppercase tracking-wider text-xs font-bold">
                Start Shopping
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10 bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Cart Items */}
          <div className="flex-1 w-full space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Shopping Cart</h1>
                <p className="text-xs md:text-sm text-muted mt-1">You have {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
              </div>
              <button
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted hover:text-danger border border-border rounded-[var(--radius)] hover:bg-red-500/5 transition-all duration-200 cursor-pointer"
                aria-label={`Clear cart (${itemCount} items)`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Cart
              </button>
            </div>

            {/* Cart Items List */}
            <div className="bg-surface rounded-[var(--radius-lg)] border border-border/40 divide-y divide-border/40 overflow-hidden shadow-sm">
              {items.map((item) => (
                <CartItemCard
                  key={item.product.id}
                  item={item}
                  handleIncrease={increaseQuantity}
                  handleDecrease={decreaseQuantity}
                  handleRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Continue Shopping Link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>

          {/* Right: Cart Summary */}
          <div className="w-full lg:w-[380px] lg:sticky lg:top-24">
            <div className="bg-surface rounded-[var(--radius-lg)] border border-border/40 p-6 shadow-sm flex flex-col gap-6">
              <h2 className="text-lg font-bold text-foreground tracking-tight border-b border-border/60 pb-4">Cart Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal ({itemCount} {itemCount !== 1 ? 'items' : 'item'})</span>
                  <span className="text-foreground font-bold">${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="text-success font-semibold">FREE</span>
                </div>

                <div className="flex justify-between border-t border-border/60 pt-4 text-base font-bold text-foreground">
                  <span>Order Total</span>
                  <span className="text-lg font-extrabold text-accent">${total.toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="block pt-2">
                  <Button className="w-full py-3.5 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-accent-foreground hover:shadow-lg hover:shadow-accent/20">
                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="text-center text-xs text-muted pt-1">
                  Tax and customs fees calculated at delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
