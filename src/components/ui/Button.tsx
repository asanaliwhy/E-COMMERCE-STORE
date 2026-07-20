import type { ButtonHTMLAttributes } from "react";

export default function Button({ children, type = "button", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-md active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}