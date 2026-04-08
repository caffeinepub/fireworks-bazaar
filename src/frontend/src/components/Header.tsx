import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export function Header() {
  const { totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate({ to: "/", search: { q: searchValue.trim(), category: "all" } });
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  const navLinkClass =
    "text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200";
  const mobileNavLinkClass =
    "px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted";

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-warm-sm"
      data-ocid="header"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <Link
            to="/"
            search={{ q: "", category: "all" }}
            className="flex items-center gap-2.5 shrink-0 group"
            data-ocid="header-logo"
          >
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-warm-sm transition-smooth group-hover:scale-105 glow-festive-sm">
              <span className="text-primary-foreground text-lg">🎆</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold text-foreground tracking-tight leading-none">
                Fireworks Bazaar
              </span>
              <p className="text-xs text-accent font-body font-medium leading-none mt-0.5">
                Diwali Crackers
              </p>
            </div>
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search sparklers, rockets, flower pots…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 bg-background border-border rounded-full text-sm"
              data-ocid="header-search"
            />
          </form>

          <div className="flex-1 md:hidden" />

          {/* Nav links desktop */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <Link
              to="/"
              search={{ q: "", category: "all" }}
              className={navLinkClass}
            >
              All Crackers
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "Sparklers" }}
              className={navLinkClass}
            >
              Sparklers
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "AerialShots" }}
              className={navLinkClass}
            >
              Aerial Shots
            </Link>
          </nav>

          {/* Mobile search toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
            data-ocid="header-search-toggle"
          >
            <Search className="w-5 h-5 text-foreground" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-lg hover:bg-muted transition-colors ml-1"
            aria-label={`Cart with ${totalItems} items`}
            data-ocid="header-cart"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground rounded-full border-0 font-bold">
                {totalItems > 99 ? "99+" : totalItems}
              </Badge>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            data-ocid="header-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="md:hidden pb-3 px-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search crackers…"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 bg-background rounded-full text-sm"
                autoFocus
                data-ocid="header-search-mobile"
              />
            </div>
          </form>
        )}

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 border-t border-border pt-3 flex flex-col gap-1">
            <Link
              to="/"
              search={{ q: "", category: "all" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              All Crackers
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "Sparklers" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sparklers
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "Rockets" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Rockets
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "AerialShots" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Aerial Shots
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "FlowerPots" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Flower Pots
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "Bombs" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Bombs
            </Link>
            <Link
              to="/"
              search={{ q: "", category: "Novelty" }}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Novelty
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
