"use client"
import ThemeToggle from "./ThemeToggle";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import ProfileMenu from "./ProfileMenu";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useUserStore } from "@/store/userStore";

export default function NavbarActions() {
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const { isLoggedIn, user } = useUserStore();

  return (
    <div className="flex items-center gap-1" aria-label="User actions">
      <ThemeToggle />
      <WishlistButton count={wishlistCount} />
      <CartButton count={cartCount} />
      <ProfileMenu isLoggedIn={isLoggedIn} username={user?.username} />
    </div>
  );
}