import type { ButtonHTMLAttributes } from "react";

export default function Button({ children, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}