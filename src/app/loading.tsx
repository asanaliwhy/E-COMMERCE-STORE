export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-black dark:border-zinc-800 dark:border-t-white" />
      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Loading...</p>
    </div>
  );
}
