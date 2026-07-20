"use client";
import Logo from "../navbar/Logo";
import SearchBar from "../navbar/SearchBar";
import NavbarLink from "../navbar/NavbarLink";
import Container from "./Container";
import NavbarActions from "../navbar/NavbarActions";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-surface/60">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4 lg:gap-8" aria-label="Main Navigation">
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchBar
              onSearch={(query) => {
                router.push(`/products?search=${encodeURIComponent(query)}`);
              }}
              placeholder="Search products..." />
          </div>

          <ul className="hidden sm:flex items-center gap-1 shrink-0">
            <li>
              <NavbarLink href="/products">Products</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/orders">Orders</NavbarLink>
            </li>
          </ul>

          <div className="flex items-center shrink-0">
            <NavbarActions />
          </div>

        </nav>
      </Container>
    </header>
  );
}