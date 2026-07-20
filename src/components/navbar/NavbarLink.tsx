"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import type {Route} from "next"

interface NavbarLinkProps {
  href: Route;
  children: ReactNode;
  className?: string;
}

export default function NavbarLink({ href, children, className }: NavbarLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-all duration-200 ${
        isActive
          ? "text-foreground bg-surface-secondary"
          : "text-muted hover:text-foreground hover:bg-surface-secondary/60"
      } ${className ?? ""}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
      )}
    </Link>
  );
}
