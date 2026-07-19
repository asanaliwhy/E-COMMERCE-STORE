import Link from "next/link";

export default function ProfileMenu() {
  return (
    <div className="relative">
      <Link href="/profile" className="flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 focus:outline-none transition-colors">
        Account
      </Link>
    </div>
  );
}
