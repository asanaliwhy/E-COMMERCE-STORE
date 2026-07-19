import  Link from "next/link";
import Image from "next/image";

interface LogoProps {
    className?: string;
}

export default function Logo({className}: LogoProps) {
  return (
      <Link aria-label="Home" href="/" className={`flex items-center gap-2 ${className ?? ""}`}><Image alt="E-Commerce Store" src="/images/logo.png" width={40} height={40} priority/>
      <span>E-Commerce</span>
      </Link>
  );
}
