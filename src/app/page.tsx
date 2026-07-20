"use client";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/product/ProductGrid";
import { queryKeys } from "@/lib/queryKeys";
import Container from "@/components/layout/Container";
import Spinner from "@/components/ui/Spinner";
import { AlertCircle, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const {data, isError, isLoading, error} = useQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  })

  if (isLoading) return (
    <main className="flex-1 flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <Spinner />
        <p className="text-sm text-muted animate-pulse">Loading products...</p>
      </div>
    </main>
  )

  if (isError) return (
    <main className="flex-1 flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
          <AlertCircle className="w-7 h-7 text-danger" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Something went wrong</h2>
        <p className="text-sm text-muted">{error?.message}</p>
      </div>
    </main>
  )

  if (!data) return (
    <main className="flex-1 flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        <p className="text-muted">No products found</p>
      </div>
    </main>
  )

  return (
    <main className="flex-1 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface to-surface-secondary py-20 md:py-28 border-b border-border/40">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Curated Collection</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Discover Our
              <span className="block text-accent">Premium Products</span>
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              From electronics to clothing, explore a wide range of premium products curated for quality and style.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-bold uppercase tracking-wider rounded-[var(--radius)] transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
              >
                Shop Now
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <Container className="py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">Featured</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Popular Products</h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-muted hover:text-accent transition-colors flex items-center gap-1"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>
        <ProductGrid products={data} />
        <p className="text-sm text-muted mt-10 text-center">
          Showing {data.length} products
        </p>
      </Container>
    </main>
  );
}