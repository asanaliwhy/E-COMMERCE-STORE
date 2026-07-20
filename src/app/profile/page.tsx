"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { toast } from "sonner";
import { User, Mail, ClipboardList, LogOut, Settings, ShieldAlert } from "lucide-react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { isLoggedIn, user, orders, logout } = useUserStore();
  const router = useRouter();

  // Route protection
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  if (!isLoggedIn || !user) {
    return null; // or loading spinner
  }

  return (
    <main className="flex-1 py-10 bg-background">
      <Container className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Account Profile</h1>
          <p className="text-xs md:text-sm text-muted mt-1">Manage your account information and view your order status</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT: User info panel */}
          <div className="md:col-span-1 bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm flex flex-col gap-6 items-center text-center">
            <div className="relative w-24 h-24 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
              <User size={48} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground capitalize">{user.username}</h2>
              <p className="text-xs text-muted mt-0.5">Premium Customer</p>
            </div>
            <hr className="w-full border-border/40" />
            <div className="w-full space-y-4 text-left">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-muted shrink-0" />
                <span className="text-foreground truncate">{user.email}</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-muted hover:text-danger border border-border rounded-[var(--radius)] hover:bg-danger/5 transition-all duration-200 cursor-pointer"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>

          {/* RIGHT: Account actions / orders summary */}
          <div className="md:col-span-2 space-y-6">
            {/* Orders Summary Panel */}
            <div className="bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                  <ClipboardList size={16} className="text-accent" />
                  Order History Summary
                </h3>
                <Link href="/orders" className="text-xs font-bold text-accent hover:text-accent-hover transition-colors">
                  View All Orders →
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <p className="text-sm text-muted">You haven't placed any orders yet.</p>
                  <Link href="/products" className="inline-block pt-1 text-xs font-semibold text-accent hover:underline">
                    Browse catalog to shop
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border/40">
                  {orders.slice(0, 2).map((order) => (
                    <div key={order.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-foreground">Order #{order.id}</p>
                        <p className="text-xs text-muted">Placed: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-extrabold text-foreground">${order.total.toFixed(2)}</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Account Settings Panel */}
            <div className="bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-3 flex items-center gap-2">
                <Settings size={16} className="text-accent" />
                Account Preferences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-[var(--radius)] bg-surface-secondary/50 border border-border/30">
                  <h4 className="text-xs font-bold text-foreground">Marketing Communications</h4>
                  <p className="text-[11px] text-muted mt-1">Managed securely inside newsletter preferences</p>
                </div>
                <div className="p-4 rounded-[var(--radius)] bg-surface-secondary/50 border border-border/30">
                  <h4 className="text-xs font-bold text-foreground">Shipping Preferences</h4>
                  <p className="text-[11px] text-muted mt-1">Default address set to main billing location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
