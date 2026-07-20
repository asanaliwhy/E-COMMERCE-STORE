import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container className="py-12">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-4 w-12 rounded bg-surface-secondary animate-pulse" />
        <div className="h-4 w-4 rounded bg-surface-secondary animate-pulse" />
        <div className="h-4 w-16 rounded bg-surface-secondary animate-pulse" />
        <div className="h-4 w-4 rounded bg-surface-secondary animate-pulse" />
        <div className="h-4 w-32 rounded bg-surface-secondary animate-pulse" />
      </div>

      <div className="grid gap-10 lg:gap-16 lg:grid-cols-2">
        {/* Image skeleton */}
        <div className="aspect-square rounded-[var(--radius-lg)] bg-surface-secondary animate-pulse" />

        {/* Info skeleton */}
        <div className="space-y-5">
          <div className="h-6 w-24 rounded-full bg-surface-secondary animate-pulse" />
          <div className="h-10 w-3/4 rounded bg-surface-secondary animate-pulse" />
          <div className="h-5 w-40 rounded bg-surface-secondary animate-pulse" />
          <div className="h-12 w-32 rounded bg-surface-secondary animate-pulse" />
          <div className="h-5 w-24 rounded bg-surface-secondary animate-pulse" />
          <div className="space-y-2 pt-4 border-t border-border">
            <div className="h-4 w-full rounded bg-surface-secondary animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-surface-secondary animate-pulse" />
            <div className="h-4 w-4/6 rounded bg-surface-secondary animate-pulse" />
          </div>
          <div className="h-14 w-full rounded-[var(--radius)] bg-surface-secondary animate-pulse" />
        </div>
      </div>
    </Container>
  );
}