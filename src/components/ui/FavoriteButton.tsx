import { Heart } from "lucide-react";

interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggle: () => void;
    className?: string;
}

export default function FavoriteButton({isFavorite, className, onToggle}: FavoriteButtonProps){
    return (
        <button
          type="button"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          onClick={onToggle}
          className={`group/fav rounded-full p-2.5 transition-all duration-200 hover:scale-110 active:scale-95 ${
            isFavorite
              ? "bg-red-50 dark:bg-red-950/30"
              : "bg-surface/80 hover:bg-surface-secondary backdrop-blur-sm"
          } ${className ?? ""}`}
        >
            <Heart
              size={18}
              aria-hidden="true"
              className={`transition-all duration-300 ${
                isFavorite
                  ? "fill-red-500 text-red-500 drop-shadow-sm"
                  : "text-muted group-hover/fav:text-red-400"
              }`}
            />
        </button>
    );
}