"use client";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/product/ProductGrid";
import { queryKeys } from "@/lib/queryKeys";
import Container from "@/components/layout/Container";

export default function Page() {
  const {data, isError, isLoading, error} = useQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  })
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error?.message}</p>
  if (!data) return <p>No products found</p>

  return (
    <main>
    <Container className="py-8">
      <header className="mb-10 space-y-3 text-center">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <p className="text-neutral-600 mx-auto max-w-2xl">Here you can find a wide range of products for all your needs. From electronics to clothing, we have something for everyone.</p>
      <p className="text-sm text-neutral-500">Shwoing {data.length} products</p>
      </header>
      <ProductGrid products={data} />
    </Container>
    </main>
  );
}