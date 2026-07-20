import Container from "./Container";
import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)] bg-primary text-primary-foreground">
              <Package size={16} />
            </div>
            <span className="font-semibold text-foreground tracking-tight">ShopNext</span>
          </div>

          <p className="text-sm text-muted order-3 md:order-2">
            &copy; {new Date().getFullYear()} ShopNext Inc. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-muted order-2 md:order-3">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
