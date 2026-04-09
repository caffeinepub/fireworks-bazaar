import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  AlertTriangle,
  Flame,
  IndianRupee,
  Phone,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { categories, products } from "../data/products";
import type { Category, Product } from "../types/product";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

const categoryIcons: Partial<Record<Category, React.ReactNode>> = {
  "sky-riders": <Sparkles className="w-3.5 h-3.5" />,
  "multiple-skyriders": <Flame className="w-3.5 h-3.5" />,
  "sound-blaster": <Zap className="w-3.5 h-3.5" />,
  "multiple-sound-blaster": <Zap className="w-3.5 h-3.5" />,
};

function discountPct(actual: number, discount: number) {
  return Math.round(((actual - discount) / actual) * 100);
}

function SafetyStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Safety rating: ${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => `star-${i}`).map((key, i) => (
        <Star
          key={key}
          className={`w-3 h-3 ${i < rating ? "fill-accent text-accent" : "text-border fill-border"}`}
        />
      ))}
      <span className="text-[10px] text-muted-foreground ml-1 font-medium">
        Safety
      </span>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const pct = discountPct(product.actualPrice, product.discountPrice);
  const catLabel =
    categories.find((c) => c.value === product.category)?.label ??
    product.category;

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart`, { duration: 2500 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group"
    >
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="block"
        data-ocid={`product-card-${product.id}`}
      >
        <div className="bg-card rounded-xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col h-full">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=60";
              }}
            />
            {/* Discount badge */}
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
              {pct}% OFF
            </span>
            {product.badge && (
              <span className="absolute top-2 right-2 bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                {product.badge}
              </span>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground bg-card px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            {/* Category */}
            <div className="flex items-center gap-1 mb-1">
              {product.category in categoryIcons && (
                <span className="text-accent">
                  {categoryIcons[product.category]}
                </span>
              )}
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                {catLabel}
              </span>
            </div>

            <h3 className="font-display font-bold text-foreground leading-tight text-base mb-1 line-clamp-2">
              {product.name}
            </h3>

            {/* Safety row */}
            <div className="flex items-center justify-between mb-3">
              <SafetyStars rating={product.safetyRating} />
              {product.minAge > 5 && (
                <div className="flex items-center gap-1 text-[10px] font-semibold text-destructive/80">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Age {product.minAge}+</span>
                </div>
              )}
            </div>

            {/* Price block */}
            <div className="flex items-center justify-between gap-2 mt-auto">
              <div>
                {/* Strikethrough actual price */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{product.actualPrice}
                  </span>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-1 py-0.5 rounded">
                    {pct}% OFF
                  </span>
                </div>
                {/* Discount price */}
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-foreground text-lg">
                    ₹{product.discountPrice}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    / {product.quantityUnit}
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold rounded-lg shrink-0 transition-smooth"
                onClick={handleAdd}
                disabled={!product.inStock}
                data-ocid={`add-to-cart-${product.id}`}
              >
                <ShoppingCart className="w-3.5 h-3.5 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CataloguePage() {
  const search = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });
  const [activeCategory, setActiveCategory] = useState<string>(
    search.category || "all",
  );
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search.q) {
      const q = search.q.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    const sorted = [...result];
    if (sortOption === "price-asc")
      sorted.sort((a, b) => a.discountPrice - b.discountPrice);
    else if (sortOption === "price-desc")
      sorted.sort((a, b) => b.discountPrice - a.discountPrice);
    else if (sortOption === "name-asc")
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [activeCategory, search.q, sortOption]);

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    navigate({ search: { q: search.q || "", category: cat } });
  }

  const activeCatLabel =
    categories.find((c) => c.value === activeCategory)?.label ?? activeCategory;

  return (
    <div>
      {/* Shop Info Banner */}
      <div
        className="bg-primary text-primary-foreground py-2 px-4"
        data-ocid="shop-info-banner"
      >
        <div className="container max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs font-semibold text-center">
          <span className="flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5" />
            Minimum Order: ₹2500
          </span>
          <span className="hidden sm:inline text-primary-foreground/50">|</span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            Delivery Charges Paid at Time of Delivery
          </span>
          <span className="hidden sm:inline text-primary-foreground/50">|</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            Call: 7904216920
          </span>
          <span className="hidden sm:inline text-primary-foreground/50">|</span>
          <span className="text-primary-foreground/90">
            🚫 No Cash on Delivery — UPI/Online Only
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            "top-6 left-[10%]",
            "top-12 right-[15%]",
            "bottom-8 left-[25%]",
            "top-4 right-[40%]",
            "bottom-4 right-[8%]",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-1.5 h-1.5 bg-accent/40 rounded-full`}
            />
          ))}
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-accent/15 text-accent border-accent/30 mb-4 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 mr-1 fill-accent" />
                Sivakasi Crackers 2025
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Light Up Your
                <br />
                <span className="text-primary">Diwali Night</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-2">
                Celebrate with premium Sivakasi fireworks — sparklers, sky
                riders, fountains, and more. Up to 30% off on all products.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <AlertTriangle className="w-3.5 h-3.5 text-destructive/70 shrink-0" />
                <span>
                  Use fireworks responsibly. Always follow safety guidelines and
                  age recommendations.
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 transition-smooth"
                  onClick={() =>
                    document
                      .getElementById("catalogue")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  data-ocid="hero-shop-cta"
                >
                  <Flame className="w-4 h-4 mr-1.5" />
                  Shop All Fireworks
                </Button>
                <Button
                  variant="outline"
                  className="border-border font-semibold rounded-lg px-6 transition-smooth"
                  onClick={() => handleCategory("hand-sparklers")}
                  data-ocid="hero-sparklers-cta"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Explore Sparklers
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden md:block"
            >
              <img
                src="/assets/generated/hero-diwali-fireworks.dim_1200x600.jpg"
                alt="Diwali fireworks celebration"
                className="w-full rounded-2xl shadow-warm-lg object-cover aspect-[16/9]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="bg-card border-b border-border sticky top-16 z-30"
        id="catalogue"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.value}
                onClick={() => handleCategory(cat.value)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground border-primary shadow-warm-sm"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`filter-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
            {search.q && (
              <span className="shrink-0 text-sm text-muted-foreground ml-2">
                Results for{" "}
                <strong className="text-foreground">"{search.q}"</strong>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24" data-ocid="catalogue-empty">
            <div className="text-5xl mb-4">🎆</div>
            <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
              No fireworks found
            </h2>
            <p className="text-muted-foreground mb-6">
              Try a different search or browse all categories.
            </p>
            <Button
              onClick={() => {
                setActiveCategory("all");
                navigate({ search: { q: "", category: "all" } });
              }}
              data-ocid="empty-browse-all"
            >
              Browse All Fireworks
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
              <h2 className="font-display text-xl font-bold text-foreground">
                {activeCatLabel}
                <span className="text-muted-foreground font-body font-normal text-sm ml-2">
                  ({filtered.length} items)
                </span>
              </h2>
              <Select
                value={sortOption}
                onValueChange={(v) => setSortOption(v as SortOption)}
              >
                <SelectTrigger
                  className="w-48 text-sm"
                  data-ocid="sort-dropdown"
                >
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A–Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              data-ocid="product-grid"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Trust section */}
      <section className="bg-muted/30 border-t border-border py-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: "🎇",
                title: "Safety Certified",
                desc: "All products meet BIS & PESO safety standards",
              },
              {
                icon: "🚚",
                title: "Delivery on Your Doorstep",
                desc: "Delivery charges applicable — paid at the time of delivery",
              },
              {
                icon: "🏷️",
                title: "Up to 30% OFF",
                desc: "Factory-direct pricing from Sivakasi",
              },
              {
                icon: "📞",
                title: "Call 7904216920",
                desc: "Order by phone — quick & easy",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="text-3xl">{item.icon}</div>
                <p className="font-display font-semibold text-sm text-foreground">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety advisory */}
      <section className="bg-destructive/8 border-t border-destructive/20 py-5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive/80 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-foreground mb-0.5">
                Fireworks Safety Advisory
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Always read the instructions on each product. Keep children
                under 12 away from high-intensity fireworks. Never hold lit
                fireworks in your hand. Use in open spaces away from buildings
                and trees. Keep a bucket of water nearby at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
