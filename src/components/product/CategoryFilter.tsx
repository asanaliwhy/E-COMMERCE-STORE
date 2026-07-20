interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted hidden lg:block">Categories</h3>
      
      {/* Desktop Vertical Menu */}
      <div className="hidden lg:flex flex-col gap-1">
        {allCategories.map((cat) => {
          const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              type="button"
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] capitalize transition-all duration-200 cursor-pointer flex items-center justify-between ${
                isActive
                  ? "bg-accent/10 text-accent font-bold border-l-2 border-accent pl-2.5"
                  : "text-foreground hover:bg-surface-secondary/80 hover:text-foreground"
              }`}
            >
              <span>{cat}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Scrollable List */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
        {allCategories.map((cat) => {
          const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              type="button"
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full capitalize tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap snap-align-start shrink-0 border ${
                isActive
                  ? "bg-accent border-accent text-accent-foreground shadow-sm"
                  : "bg-surface border-border text-muted hover:text-foreground hover:border-border-hover"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}