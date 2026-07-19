"use client";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/product/ProductGrid";
import { queryKeys } from "@/lib/queryKeys";

export default function Page() {
  const {data, isError, isLoading, error} = useQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  })
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error?.message}</p>
  if (!data) return <p>No products found</p>

  return (
      <ProductGrid products={data} />
  );
}