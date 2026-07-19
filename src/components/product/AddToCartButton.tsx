import Button from "../ui/Button";

interface AddToCartButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function AddToCartButton({ onClick, disabled, isLoading }: AddToCartButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Adding to Cart..." : "Add to Cart"}
    </Button>
  );
}
