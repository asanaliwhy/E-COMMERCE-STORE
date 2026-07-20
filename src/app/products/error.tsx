"use client";

import { useEffect } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Failed to load products
        </h1>

        <p className="mt-3 text-gray-500">
          Something went wrong while loading the products.
        </p>

        <Button
          onClick={reset}
          className="mt-8"
        >
          Try Again
        </Button>
      </div>
    </Container>
  );
}