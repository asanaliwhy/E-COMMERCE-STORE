import type { InputHTMLAttributes } from "react";
import {forwardRef} from "react"

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({className, ...props}, ref) => {
        return (
            <input
              ref={ref}
              className={`w-full rounded-[var(--radius)] border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 hover:border-border-hover ${className ?? ""}`}
              {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;