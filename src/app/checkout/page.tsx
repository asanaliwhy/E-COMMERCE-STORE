"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCart } from "@/hooks/useCart";
import { useUserStore } from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, CreditCard, User, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const { isLoggedIn, user, addOrder } = useUserStore();
  const router = useRouter();

  // Controlled Form State
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "Kazakhstan",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    // Save order to history store
    const orderItems = items.map((item) => ({
      productId: item.product.id,
      title: item.product.title,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.images[0] || "",
    }));

    addOrder(orderItems, total);

    // Simulate order placement
    clearCart();
    sessionStorage.setItem("orderPlaced", "true");
    router.push('/order-success');
  };

  if (items.length === 0) {
    return (
      <main className="flex-1 py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-md mx-auto text-center py-16 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="text-sm text-muted">Add some products to your cart before checking out.</p>
            <Link href="/products">
              <Button className="px-8 py-3 uppercase tracking-wider text-xs font-bold">
                Explore Products
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10 bg-background">
      <Container>
        <div className="mb-8 space-y-2">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft size={14} />
            Back to Cart
          </Link>
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* LEFT COLUMN: Input Fields (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact Section */}
            <section className="bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm flex flex-col gap-5">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-3 flex items-center gap-2">
                <User size={16} className="text-accent" />
                1. Contact Information
              </h2>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border-border/60 focus:border-accent"
                />
              </div>
            </section>

            {/* Shipping Section */}
            <section className="bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm flex flex-col gap-5">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-3 flex items-center gap-2">
                <Truck size={16} className="text-accent" />
                2. Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="address" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                  Street Address
                </label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  required
                  placeholder="123 Main St"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-background border-border/60 focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    City
                  </label>
                  <Input
                    id="city"
                    type="text"
                    name="city"
                    required
                    placeholder="Astana"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="zipCode" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    ZIP Code
                  </label>
                  <Input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    required
                    placeholder="010000"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="country" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    Country
                  </label>
                  <Input
                    id="country"
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-surface p-6 border border-border/40 rounded-[var(--radius-lg)] shadow-sm flex flex-col gap-5">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-3 flex items-center gap-2">
                <CreditCard size={16} className="text-accent" />
                3. Payment Details
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cardNumber" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                  Card Number
                </label>
                <Input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  required
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full bg-background border-border/60 focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="expirationDate" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    Expiration Date
                  </label>
                  <Input
                    id="expirationDate"
                    type="text"
                    name="expirationDate"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    value={formData.expirationDate}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cvv" className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    type="password"
                    name="cvv"
                    required
                    maxLength={4}
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full bg-background border-border/60 focus:border-accent"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Order Summary Sidebar (1 Col) */}
          <div className="bg-surface p-6 rounded-[var(--radius-lg)] border border-border/40 flex flex-col gap-5 sticky top-24 shadow-sm">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-3">
              Order Summary ({itemCount})
            </h2>

            <div className="flex flex-col gap-4 max-h-64 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-sm gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{item.product.title}</p>
                    <p className="text-xs text-muted">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-foreground shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/60 pt-4 flex flex-col gap-3">
              <div className="flex justify-between text-sm text-muted">
                <span>Shipping</span>
                <span className="font-bold text-success">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-foreground pt-3 border-t border-border/40">
                <span>Total</span>
                <span className="text-lg font-extrabold text-accent">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full py-3.5 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-accent-foreground hover:shadow-lg hover:shadow-accent/20">
                Place Order (${total.toFixed(2)})
              </Button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted border-t border-border/40 pt-4">
              <ShieldCheck size={14} className="text-success" />
              Secure payment processed safely
            </div>
          </div>
        </form>
      </Container>
    </main>
  );
}