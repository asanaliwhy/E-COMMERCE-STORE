import Logo from "../navbar/Logo";
import SearchBar from "../navbar/SearchBar";
import NavbarLink from "../navbar/NavbarLink";
import Container from "./Container";
import NavbarActions from "../navbar/NavbarActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-6" aria-label="Main Navigation">
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          <div className="flex-1 max-w-lg mx-2">
            <SearchBar onSearch={(query)=>{console.log(query)}} placeholder="Search products..." />
          </div>

          <ul className="flex items-center gap-6 shrink-0">
            <li>
              <NavbarLink href="/products">Products</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/orders">Orders</NavbarLink>
            </li>
          </ul>

          <div className="flex items-center shrink-0">
            <NavbarActions />
          </div>

        </nav>
      </Container>
    </header>
  );
}