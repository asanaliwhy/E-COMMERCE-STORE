import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import WishlistButton from "./WishlistButton"
import CartButton from "./CartButton"
import ProfileMenu from "./ProfileMenu";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-4" aria-label="User actions">
      <ThemeToggle />
      <WishlistButton count={0} />
      <CartButton count={0} />
      <ProfileMenu isLoggedIn={false} />
    </div>
  );
}