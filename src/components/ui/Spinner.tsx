export default function Spinner() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="h-8 w-8 rounded-full border-[3px] border-border border-t-accent animate-spin"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
