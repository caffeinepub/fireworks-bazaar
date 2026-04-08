import { c as createLucideIcon, l as useParams, i as useCart, r as reactExports, j as jsxRuntimeExports, L as Link, B as Badge, S as ShoppingCart, T as TriangleAlert, k as ue } from "./index-CinIDX7m.js";
import { B as Button, m as motion, I as IndianRupee, S as Sparkles } from "./proxy-OY18Q7Xj.js";
import { p as products, C as Check, Z as Zap, c as categories, S as Star } from "./products-5sZoHGCg.js";
import { A as ArrowLeft } from "./arrow-left-HE_6sIdk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const categoryLabel = (cat) => {
  var _a;
  return ((_a = categories.find((c) => c.value === cat)) == null ? void 0 : _a.label) ?? cat;
};
function discountPct(actual, discount) {
  return Math.round((actual - discount) / actual * 100);
}
function StarRating({ rating, max = 5 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `Safety rating: ${rating} out of ${max}`,
      children: Array.from({ length: max }, (_, i) => `star-${i}`).map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          className: `w-4 h-4 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted-foreground/40"}`
        },
        key
      ))
    }
  );
}
const SAFETY_TIPS = {
  1: {
    label: "Kids Safe",
    tips: [
      "Suitable for children aged 5+ with adult supervision",
      "Keep away from face and clothing",
      "Dispose used items safely",
      "Do not put in mouth or near eyes"
    ]
  },
  2: {
    label: "Family Friendly",
    tips: [
      "Suitable for children aged 8+ with adult supervision",
      "Hold sparklers at arm's length",
      "Never hold near clothing or hair",
      "Let used sparklers cool before touching"
    ]
  },
  3: {
    label: "Moderate Caution",
    tips: [
      "Adult supervision required at all times",
      "Place on flat, non-flammable ground surface",
      "Stand at least 5 metres away after lighting",
      "Never hold in hand or point at people",
      "Store away from heat and moisture before use"
    ]
  },
  4: {
    label: "High Caution",
    tips: [
      "Adults (14+) only — always supervise younger persons",
      "Use in open outdoor areas only",
      "Light fuse and retreat immediately",
      "Never re-light a dud — soak in water and discard",
      "Keep children and pets at safe distance"
    ]
  },
  5: {
    label: "Very Safe",
    tips: [
      "Safe for all ages with adult supervision",
      "Hold at arm's length while lit",
      "Do not point at face or clothing",
      "Let cool completely before disposal"
    ]
  }
};
const CATEGORY_EFFECTS = {
  "sky-riders": "Launches high into the sky with a whistling ascent before detonating in a brilliant aerial burst of stars and colors.",
  "multiple-skyriders": "Multiple sky riders launched simultaneously, creating a spectacular synchronized aerial display.",
  "hand-sparklers": "Emits a shower of bright sparks and glittering stars as it burns — perfect for waving and photos.",
  "flower-pots": "A ground-based fountain of sparks that erupts upward in a flower-like plume of colors.",
  "magical-spinner": "Spins rapidly on the ground, emitting colorful sparks in a circular wheel pattern.",
  "kids-world": "Fun and safe novelty fireworks designed for children, creating delightful visual effects.",
  "fancy-fountain": "Shoots a sustained fountain of sparks and colorful effects into the air.",
  "sound-blaster": "Produces a sharp, satisfying report (bang) with a flash on detonation.",
  "paper-sound-blaster": "Eco-friendly paper crackers delivering satisfying bangs with minimal debris.",
  "multiple-sound-blaster": "Multiple synchronized crackers creating a powerful festive sound barrage."
};
function ProductDetailPage() {
  const { id } = useParams({ from: "/products/$id" });
  const { addItem } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id && p.category === (product == null ? void 0 : product.category)).slice(0, 3);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-7xl mx-auto px-4 py-24 text-center",
        "data-ocid": "product-not-found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-2", children: "Product not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This item may have sold out or been removed from our catalogue." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", search: { q: "", category: "all" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-ocid": "back-to-catalogue", children: "Back to Catalogue" }) })
        ]
      }
    );
  }
  const safetyInfo = SAFETY_TIPS[product.safetyRating] ?? SAFETY_TIPS[3];
  const categoryEffect = CATEGORY_EFFECTS[product.category] ?? "This product creates a visual display effect when ignited.";
  const isHighRisk = product.minAge >= 14;
  const pct = discountPct(product.actualPrice, product.discountPrice);
  const savings = product.actualPrice - product.discountPrice;
  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product);
    ue.success(`${qty}× ${product.name} added to cart`, { duration: 2500 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          search: { q: "", category: "all" },
          className: "hover:text-foreground transition-colors",
          "data-ocid": "product-back",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 inline mr-1" }),
            "Catalogue"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: categoryLabel(product.category) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.4 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-2xl overflow-hidden bg-muted shadow-warm-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.imageUrl,
                alt: product.name,
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.target.src = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80";
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider",
                "data-ocid": "product-discount-badge",
                children: [
                  pct,
                  "% OFF"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${product.inStock ? "bg-green-600/90 text-white" : "bg-destructive/90 text-destructive-foreground"}`,
                "data-ocid": "product-stock-badge",
                children: product.inStock ? "In Stock" : "Out of Stock"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold shadow-warm-md ${isHighRisk ? "bg-amber-500 text-white" : "bg-green-600 text-white"}`,
                "data-ocid": "product-age-badge",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                  product.minAge,
                  "+ Only"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          className: "flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs font-semibold uppercase tracking-wide",
                  children: categoryLabel(product.category)
                }
              ),
              product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs font-semibold bg-accent text-accent-foreground", children: product.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: product.quantityUnit }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.safetyRating }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: safetyInfo.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                "(",
                product.safetyRating,
                "/5 safety)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-muted/40 border border-border/60 rounded-xl p-4 mb-5",
                "data-ocid": "product-price-block",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base text-muted-foreground line-through", children: [
                      "₹",
                      product.actualPrice
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md", children: [
                      pct,
                      "% OFF"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-4xl font-bold text-foreground", children: [
                      "₹",
                      product.discountPrice
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm", children: [
                      "/ ",
                      product.quantityUnit
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-2 text-sm font-semibold text-green-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
                    "You save ₹",
                    savings,
                    " on this item!"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-3 text-center border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-4 h-4 text-accent mx-auto mb-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: product.effectDuration })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-3 text-center border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-accent mx-auto mb-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Pack Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: product.packSize })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `rounded-xl p-3 text-center border ${isHighRisk ? "bg-amber-500/10 border-amber-500/30" : "bg-muted/50 border-border/50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ShieldAlert,
                      {
                        className: `w-4 h-4 mx-auto mb-1 ${isHighRisk ? "text-amber-500" : "text-accent"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Min Age" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: `text-xs font-bold leading-tight ${isHighRisk ? "text-amber-500" : "text-foreground"}`,
                        children: [
                          product.minAge,
                          "+"
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 mb-5",
                "data-ocid": "product-cart-controls",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-xl overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Decrease quantity",
                        className: "px-3 py-2.5 text-foreground hover:bg-muted transition-colors text-lg font-bold disabled:opacity-40",
                        disabled: qty <= 1,
                        onClick: () => setQty((q) => Math.max(1, q - 1)),
                        "data-ocid": "product-qty-decrease",
                        children: "−"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-4 py-2.5 font-semibold text-foreground text-sm min-w-[2.5rem] text-center",
                        "data-ocid": "product-qty-value",
                        children: qty
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Increase quantity",
                        className: "px-3 py-2.5 text-foreground hover:bg-muted transition-colors text-lg font-bold",
                        onClick: () => setQty((q) => q + 1),
                        "data-ocid": "product-qty-increase",
                        children: "+"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-smooth text-base",
                      onClick: handleAdd,
                      disabled: !product.inStock || added,
                      "data-ocid": "product-add-to-cart",
                      children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 mr-2" }),
                        "Added!"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5 mr-2" }),
                        product.inStock ? "Add to Cart" : "Out of Stock"
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full rounded-xl border-border transition-smooth",
                "data-ocid": "product-view-cart",
                children: "View Cart"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2.5 text-xs text-foreground/80 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4 text-amber-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Minimum order ₹2500." }),
                " Payment via UPI:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "9787549797@upi" }),
                " — No Cash on Delivery."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: product.safetyRating <= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs gap-1 bg-green-600 text-white hover:bg-green-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
              "Kids Friendly"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3 h-3" }),
              product.minAge,
              "+ Suitable"
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4 },
          className: "bg-card rounded-2xl p-6 border border-border shadow-warm-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold text-foreground", children: "Visual Effect" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: categoryEffect }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Effect Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3.5 h-3.5 text-accent" }),
                  product.effectDuration
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Safety Rating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.safetyRating, max: 5 }) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.1 },
          className: "bg-amber-950/80 border border-amber-700/50 rounded-2xl p-6 shadow-warm-sm",
          "data-ocid": "product-safety-panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold text-amber-200", children: "Safety Warnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-700/50 text-amber-300", children: safetyInfo.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", "aria-label": "Safety instructions", children: safetyInfo.tips.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-sm text-amber-100/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-400" }),
                  tip
                ]
              },
              tip
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs leading-relaxed text-amber-300/70", children: "Always follow the manufacturer's instructions. Misuse of fireworks is illegal and dangerous." })
          ]
        }
      )
    ] }) }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground mb-6", children: [
        "More ",
        categoryLabel(product.category)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: related.map((p, i) => {
        const relPct = discountPct(p.actualPrice, p.discountPrice);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.35, delay: i * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products/$id",
                params: { id: p.id },
                className: "block group",
                "data-ocid": `related-product-${p.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl overflow-hidden shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-0.5 border border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-muted relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: p.imageUrl,
                        alt: p.name,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                        loading: "lazy",
                        onError: (e) => {
                          e.target.src = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=60";
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded", children: [
                      relPct,
                      "% OFF"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground line-clamp-1 mb-1", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground line-through", children: [
                        "₹",
                        p.actualPrice
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body font-bold text-foreground text-sm", children: [
                        "₹",
                        p.discountPrice
                      ] })
                    ] })
                  ] })
                ] })
              }
            )
          },
          p.id
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border-t border-border py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        search: { q: "", category: "all" },
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
        "data-ocid": "product-back-bottom",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Full Catalogue"
        ]
      }
    ) }) })
  ] });
}
export {
  ProductDetailPage
};
