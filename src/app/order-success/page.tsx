"use client"
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function OrderSuccessPage() {
  const router = useRouter();
  const [orderNumber] = useState(
    () => Math.floor(100000 + Math.random() * 900000)
  );

  useEffect(() => {
    if (!sessionStorage.getItem("orderPlaced")) {
      router.replace("/");
      return;
    }

    sessionStorage.removeItem("orderPlaced");
  }, [router]);

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
        <Container>
            <div className="max-w-lg mx-auto my-20 bg-white rounded-xl shadow-md p-10 text-center flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold">Order #{orderNumber} Placed Successfully</h1>
                <p className="text-gray-600">Thank you for shopping with us.</p>
                <p className="text-gray-600">We&apos;ll send you an email once your package is on its way.</p>
                <p className="text-gray-600">Estimated delivery: 3&ndash;5 business days.</p>
            <hr className="w-full border-gray-200" />
            <div className="flex gap-4 mt-4 justify-center w-full">
                <Link href="/products" className="flex-1">
                    <Button aria-label="Continue shopping" className="w-full">Continue Shopping</Button>
                </Link>
                <Link href="/" className="flex-1">
                    <Button aria-label="Go home" className="w-full">Go Home</Button>
                </Link>
            </div>
            </div>
        </Container>
    )
}























