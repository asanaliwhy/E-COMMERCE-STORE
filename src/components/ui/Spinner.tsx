export default function Spinner() {
  return (
    <div
      className="animate-spin rounded-full h-8 w-8 border-4 border-neutral-200 border-t-blue-600"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
