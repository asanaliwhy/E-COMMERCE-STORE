import Container from "@/components/layout/Container";
import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";

export default function Loading() {
  return (
    <main className="flex-1">
      {/* Hero skeleton */}
      <div className="bg-surface-secondary py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="h-4 w-32 mx-auto rounded-full shimmer" />
            <div className="h-10 w-80 mx-auto rounded-[var(--radius)] shimmer" />
            <div className="h-4 w-96 mx-auto rounded-full shimmer" />
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
}