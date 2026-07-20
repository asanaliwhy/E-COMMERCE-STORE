"use client";

import { useEffect } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
        <h1 className="text-3xl font-bold">
          Unable to load this product
        </h1>

        <p className="mt-3 text-gray-500">
          The product could not be loaded.
        </p>

        <div className="mt-8 flex gap-4">
          <Button onClick={reset}>
            Try Again
          </Button>

          <Link href="/products">
            <Button>
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}