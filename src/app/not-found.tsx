import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Page Not Found</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Go back home
      </Link>
    </div>
  );
}
