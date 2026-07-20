export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-[var(--radius-lg)] border border-border/50 bg-surface overflow-hidden">
      <div className="aspect-[4/5] w-full shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 rounded-full shimmer" />
        <div className="h-3 w-1/2 rounded-full shimmer" />
      </div>
    </div>
  );
}