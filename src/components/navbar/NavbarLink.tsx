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
    <Link href={href} aria-current={isActive ? "page" : undefined} className={[`transition-colors duration-200`, isActive && "font-semibold", className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
