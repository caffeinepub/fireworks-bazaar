import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  IndianRupee,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "917904216920";

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  subtotal: number,
  tax: number,
  orderTotal: number,
): string {
  const lines: string[] = [];
  lines.push("🎆 *New Order — Fireworks Bazaar*");
  lines.push("─────────────────────────");
  for (const item of items) {
    const lineTotal = (item.product.discountPrice * item.quantity).toFixed(0);
    lines.push(
      `• ${item.product.name}\n  Qty: ${item.quantity} × ₹${item.product.discountPrice.toFixed(0)} = ₹${lineTotal}`,
    );
  }
  lines.push("─────────────────────────");
  lines.push(`Subtotal: ₹${subtotal.toFixed(0)}`);
  lines.push(`GST (5%): ₹${tax}`);
  lines.push(`*Order Total: ₹${orderTotal.toFixed(0)}*`);
  lines.push("─────────────────────────");
  lines.push(
    "Please confirm my order and share payment details. Thank you! 🙏",
  );
  return lines.join("\n");
}

// WhatsApp icon SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  function handleRemove(productId: string, name: string) {
    removeItem(productId);
    toast.success(`${name} removed from cart`, { duration: 2000 });
  }

  const meetsMinOrder = totalPrice >= 2500;

  if (items.length === 0) {
    return (
      <div
        className="container max-w-2xl mx-auto px-4 py-24 text-center"
        data-ocid="cart-empty"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-3">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mb-2 text-lg">
            🎆 No fireworks added yet!
          </p>
          <p className="text-muted-foreground mb-8">
            Browse our Sivakasi crackers collection — up to 30% off on all
            products.
          </p>
          <Link to="/" search={{ q: "", category: "all" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 font-semibold"
              data-ocid="cart-browse-cta"
            >
              Browse Fireworks
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const tax = Math.round(totalPrice * 0.05);
  const orderTotal = totalPrice + tax;
  const remaining = Math.max(0, 2500 - totalPrice);

  function handleWhatsAppOrder() {
    if (!meetsMinOrder) {
      toast.warning(
        `Add ₹${remaining.toFixed(0)} more to meet the minimum order of ₹2500`,
        { duration: 4000 },
      );
      return;
    }
    const message = buildWhatsAppMessage(items, totalPrice, tax, orderTotal);
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success(
      "Opening WhatsApp — your order details are ready to send! 🎆",
      {
        duration: 4000,
      },
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          to="/"
          search={{ q: "", category: "all" }}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-ocid="cart-back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Your Cart
          <span className="text-muted-foreground font-body font-normal text-base ml-2">
            ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
        </h1>
      </div>

      {/* Minimum order banner */}
      {!meetsMinOrder && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-3 flex items-center gap-3"
          data-ocid="min-order-warning"
        >
          <IndianRupee className="w-5 h-5 text-amber-500 shrink-0" />
          <p className="text-sm text-foreground">
            <strong>Minimum order ₹2500.</strong> Add ₹{remaining.toFixed(0)}{" "}
            more to place your order.
          </p>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
        {/* Cart Items */}
        <div className="space-y-4" data-ocid="cart-items">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-xl border border-border/50 shadow-warm-sm p-4"
                data-ocid={`cart-item-${item.product.id}`}
              >
                <div className="flex gap-4">
                  <Link
                    to="/products/$id"
                    params={{ id: item.product.id }}
                    className="shrink-0"
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover bg-muted"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=60";
                      }}
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          to="/products/$id"
                          params={{ id: item.product.id }}
                        >
                          <h3 className="font-display font-bold text-foreground text-sm leading-tight hover:text-primary transition-colors line-clamp-2">
                            {item.product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0 font-medium capitalize"
                          >
                            {item.product.category.replace(/-/g, " ")}
                          </Badge>
                          {item.product.quantityUnit && (
                            <span className="text-xs text-muted-foreground">
                              {item.product.quantityUnit}
                            </span>
                          )}
                        </div>
                        {item.product.effectDuration && (
                          <p className="text-xs text-accent mt-0.5 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            {item.product.effectDuration}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemove(item.product.id, item.product.name)
                        }
                        className="shrink-0 p-1.5 text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/10"
                        aria-label={`Remove ${item.product.name}`}
                        data-ocid={`remove-item-${item.product.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
                        <button
                          type="button"
                          className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          data-ocid={`qty-decrease-${item.product.id}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span
                          className="w-8 text-center text-sm font-semibold text-foreground"
                          data-ocid={`qty-value-${item.product.id}`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          data-ocid={`qty-increase-${item.product.id}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line total with price breakdown */}
                      <div className="text-right">
                        <div className="font-display font-bold text-foreground">
                          ₹
                          {(item.product.discountPrice * item.quantity).toFixed(
                            0,
                          )}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-[11px] text-muted-foreground">
                            ₹{item.product.discountPrice.toFixed(0)} each
                          </div>
                        )}
                        <div className="text-[10px] text-muted-foreground line-through">
                          ₹
                          {(item.product.actualPrice * item.quantity).toFixed(
                            0,
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Clear cart */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              data-ocid="cart-clear"
            >
              Clear all items
            </button>
          </div>

          {/* Payment info note */}
          <div
            className="bg-card border border-border rounded-xl p-4 space-y-2 text-sm"
            data-ocid="payment-info"
          >
            <div className="font-semibold text-foreground text-base mb-1">
              Payment &amp; Order Info
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <IndianRupee className="w-4 h-4 text-primary shrink-0" />
              <span>
                Minimum order:{" "}
                <strong className="text-foreground">₹2500</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="w-4 h-4 text-primary shrink-0" />
              <span>Free delivery all over India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>
                Call to order:{" "}
                <strong className="text-foreground">7904216920</strong>
              </span>
            </div>
            <div className="bg-primary/8 border border-primary/20 rounded-lg px-3 py-2 text-xs text-foreground/80">
              💳 UPI Payment: <strong>9787549797@upi</strong> —{" "}
              <span className="text-destructive font-semibold">
                No Cash on Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-card rounded-xl border border-border/50 shadow-warm-sm p-6 sticky top-24"
          data-ocid="order-summary"
        >
          <h2 className="font-display font-bold text-lg text-foreground mb-5">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>
                Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
              <span className="text-foreground font-medium">
                ₹{totalPrice.toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery</span>
              <span className="text-accent font-medium">Free!</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>GST (5%)</span>
              <span className="text-foreground font-medium">₹{tax}</span>
            </div>
          </div>

          {/* Minimum order progress */}
          {!meetsMinOrder && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Towards minimum order</span>
                <span>₹{totalPrice.toFixed(0)} / ₹2500</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (totalPrice / 2500) * 100)}%`,
                  }}
                />
              </div>
              <p className="text-xs text-amber-600 mt-1">
                Add ₹{remaining.toFixed(0)} more to place order
              </p>
            </div>
          )}

          {meetsMinOrder && (
            <div className="bg-green-600/10 border border-green-600/30 rounded-lg px-3 py-2 mt-3">
              <p className="text-xs text-green-600 font-semibold">
                ✓ Minimum order met — ready to order!
              </p>
            </div>
          )}

          <Separator className="my-4" />

          <div className="flex justify-between font-display font-bold text-foreground text-lg mb-5">
            <span>Order Total</span>
            <span>₹{orderTotal.toFixed(0)}</span>
          </div>

          {/* WhatsApp Order Button */}
          <motion.button
            type="button"
            onClick={handleWhatsAppOrder}
            disabled={!meetsMinOrder}
            whileHover={meetsMinOrder ? { scale: 1.02 } : {}}
            whileTap={meetsMinOrder ? { scale: 0.98 } : {}}
            className={[
              "w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200",
              meetsMinOrder
                ? "bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-md"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-60",
            ].join(" ")}
            data-ocid="whatsapp-order-cta"
            aria-label="Order via WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            Order via WhatsApp
          </motion.button>

          {!meetsMinOrder && (
            <p className="text-center text-xs text-amber-600 mt-2">
              Add ₹{remaining.toFixed(0)} more to unlock ordering
            </p>
          )}

          <p className="text-center text-xs text-muted-foreground mt-3">
            UPI: <strong>9787549797@upi</strong> · No COD
          </p>

          <Link
            to="/"
            search={{ q: "", category: "all" }}
            className="block mt-3"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-xl border-border transition-smooth"
              data-ocid="continue-shopping"
            >
              Continue Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
