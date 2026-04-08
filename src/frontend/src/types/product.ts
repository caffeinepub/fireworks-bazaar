export type Category =
  | "sky-riders"
  | "multiple-skyriders"
  | "hand-sparklers"
  | "flower-pots"
  | "magical-spinner"
  | "kids-world"
  | "fancy-fountain"
  | "sound-blaster"
  | "paper-sound-blaster"
  | "multiple-sound-blaster";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // = discountPrice, kept for cart compatibility
  actualPrice: number; // original / strikethrough price
  discountPrice: number; // sale price
  quantityUnit: string; // e.g. "1 Box", "1 Piece", "1 Packet"
  imageUrl: string;
  category: Category;
  packSize: string; // same as quantityUnit for display
  effectDuration: string;
  safetyRating: number; // 1–5
  minAge: number;
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
