"use client";
import { useWishlist } from "@/hooks/useWishlist";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Trash2, Heart, ShoppingCart } from "lucide-react";
import AddToCartButton from "@/components/product/AddToCartButton";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <main className="flex-1 py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-md mx-auto text-center py-16 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center text-muted">
              <Heart size={28} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Your Wishlist is Empty</h1>
              <p className="text-sm text-muted">
                Keep track of items you love by clicking the heart icon on any product page.
              </p>
            </div>
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full px-8 py-3 uppercase tracking-wider text-xs font-bold">
                Start Exploring
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
        <div className="flex items-center justify-between border-b border-border/60 pb-6 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              My Wishlist
            </h1>
            <p className="text-xs md:text-sm text-muted mt-1">
              You have {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved
            </p>
          </div>
          <button
            onClick={clearWishlist}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-danger border border-border rounded-[var(--radius)] hover:bg-red-500/5 transition-all duration-200"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        </div>

        {/* Wishlist List */}
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row items-center justify-between gap-6 p-5 bg-surface border border-border/40 rounded-[var(--radius-lg)] hover:shadow-md transition-all duration-300"
            >
              {/* Product Thumbnail Container */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                <Link
                  href={`/products/${item.id}`}
                  className="relative w-28 h-28 flex-shrink-0 rounded-[var(--radius)] overflow-hidden border border-border/30"
                >
                  {/* Always light background for product images */}
                  <div className="absolute inset-0 bg-image-bg" />
                  <Image
                    src={item.images?.at(0) ?? "/placeholder.png"}
                    alt={item.title}
                    fill
                    className="object-contain p-4 relative z-10 transition-transform duration-300 group-hover:scale-105"
                    sizes="112px"
                  />
                </Link>

                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                    {item.category}
                  </span>
                  <Link href={`/products/${item.id}`} className="block">
                    <h3 className="text-sm font-bold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-base font-extrabold text-foreground pt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <AddToCartButton
                  product={item}
                  className="w-full sm:w-auto py-2.5 px-6 text-xs font-bold uppercase tracking-wider flex-1 sm:flex-none"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex items-center justify-center p-2.5 rounded-[var(--radius)] border border-border text-muted hover:text-danger hover:border-danger/30 hover:bg-danger/5 transition-all duration-200"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
