"use client";

import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { toast } from "sonner";
import { UserPlus, User, Mail, Key } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useUserStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    // Simulate API registration
    setTimeout(() => {
      register(email, username);
      toast.success("Account created successfully! Welcome to ShopNext.");
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <main className="flex-1 flex items-center justify-center py-12 md:py-20 bg-background">
      <Container className="max-w-md">
        <div className="bg-surface p-8 border border-border/40 rounded-[var(--radius-lg)] shadow-md flex flex-col gap-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-2">
              <UserPlus size={24} />
            </div>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Create Account</h1>
            <p className="text-xs text-muted">Join us today to receive exclusive deals and fast shipping</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-[10px] font-bold text-muted uppercase tracking-wider flex items-center gap-1">
                <User size={12} />
                Username
              </label>
              <Input
                id="username"
                type="text"
                required
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background border-border/60 focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-muted uppercase tracking-wider flex items-center gap-1">
                <Mail size={12} />
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border/60 focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[10px] font-bold text-muted uppercase tracking-wider flex items-center gap-1">
                <Key size={12} />
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Min. 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border/60 focus:border-accent"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-accent-foreground hover:shadow-lg hover:shadow-accent/20"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </form>

          <div className="border-t border-border/40 pt-4 text-center">
            <p className="text-xs text-muted">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-accent hover:text-accent-hover transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
