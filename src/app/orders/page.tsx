"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { ClipboardList, ArrowLeft, Truck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OrdersPage() {
  const { isLoggedIn, orders } = useUserStore();
  const router = useRouter();

  // Route protection
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  if (orders.length === 0) {
    return (
      <main className="flex-1 py-16 bg-background">
        <Container>
          <div className="max-w-md mx-auto text-center py-16 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center text-muted">
              <ClipboardList size={28} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">No Orders Placed Yet</h1>
              <p className="text-sm text-muted">
                You haven&apos;t made any purchases yet. Your past orders will appear here.
              </p>
            </div>
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full px-8 py-3 uppercase tracking-wider text-xs font-bold">
                Browse Products
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10 bg-background">
      <Container className="max-w-4xl">
        <div className="mb-8 space-y-2">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft size={14} />
            Back to Account
          </Link>
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Order History</h1>
          <p className="text-xs md:text-sm text-muted">Track status, download invoices, and manage past shipments</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-surface border border-border/40 rounded-[var(--radius-lg)] shadow-sm overflow-hidden"
            >
              {/* Order Header / Meta */}
              <div className="bg-surface-secondary/40 p-4 border-b border-border/40 flex flex-wrap items-center justify-between gap-4 text-sm">
                <div className="flex gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider">Order Placed</p>
                    <p className="font-semibold text-foreground mt-0.5">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider">Total Value</p>
                    <p className="font-bold text-accent mt-0.5">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider">Order ID</p>
                    <p className="font-mono font-semibold text-foreground mt-0.5">#{order.id}</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                    <Truck size={12} />
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Items List */}
              <div className="p-5 divide-y divide-border/40">
                {order.items.map((item) => (
                  <div key={item.productId} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-[var(--radius-sm)] border border-border/30 overflow-hidden bg-image-bg">
                        <Image
                          src={item.image || "/placeholder.png"}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                          sizes="64px"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-foreground line-clamp-1 max-w-[300px] sm:max-w-md">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted">
                          Qty: {item.quantity} @ ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-foreground shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
