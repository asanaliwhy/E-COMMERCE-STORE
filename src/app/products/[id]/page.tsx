"use client"
import { getProduct, getProducts } from "@/services/products";
import FavoriteButton from "@/components/ui/FavoriteButton";
import AddToCartButton from "@/components/product/AddToCartButton";
import {queryKeys} from "@/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/layout/Container";
import Link from "next/link";
import ProductImage from "@/components/product/ProductImage";
import ProductInfo from "@/components/product/ProductInfo";
import ProductCard from "@/components/product/ProductCard";
import QuantitySelector from "@/components/product/QuantitySelector";
import { useState } from "react";
import {useParams} from "next/navigation";
import { useWishlist } from "@/hooks/useWishlist";
import { ChevronRight, Truck, RotateCcw, ShieldCheck, Package } from "lucide-react";
import Spinner from "@/components/ui/Spinner";

function TrustSignal({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-[var(--radius)] bg-surface-secondary/50 border border-border/30">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs font-bold text-foreground">{title}</p>
        <p className="text-[11px] text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ProductDetailPage(){
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = Number(params.id);
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (Number.isNaN(id)) {
    return <p>Invalid product ID.</p>;
  }

  const {data, isLoading, isError, error} = useQuery({
    queryKey: queryKeys.product(id),
    queryFn: () => getProduct(id),
    enabled: !Number.isNaN(id),
  });

  const {data: allProducts} = useQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  });

  if (isLoading) return (
    <Container className="py-12">
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-4">
          <Spinner />
          <p className="text-sm text-muted animate-pulse">Loading product...</p>
        </div>
      </div>
    </Container>
  );

  if (isError) return (
    <Container className="py-12">
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-muted">Error: {error?.message}</p>
      </div>
    </Container>
  );

  if (!data) return (
    <Container className="py-12">
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-muted">Product not found</p>
      </div>
    </Container>
  );

  // Get related products (same category, different id)
  const relatedProducts = allProducts
    ?.filter((p) => p.category === data.category && p.id !== data.id)
    .slice(0, 4) ?? [];

  return (
    <main className="flex-1 pb-16">
      <Container className="py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={14} className="text-border" />
          <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
          <ChevronRight size={14} className="text-border" />
          <span className="text-foreground font-medium truncate max-w-[200px]">{data.title}</span>
        </nav>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: Product Image */}
          <div className="lg:sticky lg:top-24">
            <ProductImage image={data.images[0]} title={data.title} />
          </div>

          {/* RIGHT: Product Info & Actions */}
          <div className="flex flex-col gap-5">
            <ProductInfo product={data} />

            {/* Purchase Actions */}
            <div className="flex items-center gap-3 pt-2">
              <QuantitySelector quantity={quantity} onChange={setQuantity} max={99} />
              <AddToCartButton
                product={data}
                quantity={quantity}
                id={id}
                className="flex-1 py-3.5 px-8 text-sm font-bold uppercase tracking-wider"
              />
              <FavoriteButton
                isFavorite={isInWishlist(data.id)}
                onToggle={() => toggleWishlist(data)}
                className="p-3.5 border border-border rounded-[var(--radius)] hover:border-accent hover:bg-accent/5 transition-all duration-200"
              />
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <TrustSignal icon={Truck} title="Free Shipping" subtitle="On orders over $50" />
              <TrustSignal icon={RotateCcw} title="Easy Returns" subtitle="30-day return policy" />
              <TrustSignal icon={ShieldCheck} title="Secure Checkout" subtitle="SSL encrypted payment" />
              <TrustSignal icon={Package} title="Quality Guaranteed" subtitle="Premium materials" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">You may also like</p>
                <h2 className="text-xl font-bold text-foreground">Related Products</h2>
              </div>
              <Link
                href="/products"
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  )
}