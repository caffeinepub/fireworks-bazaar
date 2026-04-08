import type { backendInterface, Product, Category } from "../backend";

const sampleProducts: Product[] = [
  {
    id: BigInt(0),
    name: "Gold Sparklers 12-inch",
    description:
      "Classic gold sparklers that shower brilliant golden sparks. Perfect for family celebrations. Handle with care and keep away from face.",
    price: BigInt(120),
    imageUrl:
      "https://images.unsplash.com/photo-1514912885225-5e9f08f66478?w=600",
    category: "Sparklers" as unknown as Category,
    packSize: "Pack of 10",
    effectDuration: "45 seconds",
    safetyRating: BigInt(3),
    minAge: BigInt(12),
    inStock: true,
  },
  {
    id: BigInt(1),
    name: "Silver Star Sparklers",
    description:
      "Dazzling silver sparklers with a bright star-like effect. Great for kids under adult supervision. Burns cool at the base.",
    price: BigInt(80),
    imageUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600",
    category: "Sparklers" as unknown as Category,
    packSize: "Pack of 6",
    effectDuration: "60 seconds",
    safetyRating: BigInt(2),
    minAge: BigInt(10),
    inStock: true,
  },
  {
    id: BigInt(2),
    name: "Sky Rocket Classic",
    description:
      "High-flying rockets that soar into the sky and burst into a dazzling shower of colorful stars. Only for open spaces. Adult supervision mandatory.",
    price: BigInt(350),
    imageUrl:
      "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?w=600",
    category: "Rockets" as unknown as Category,
    packSize: "Pack of 5",
    effectDuration: "8 seconds burst",
    safetyRating: BigInt(4),
    minAge: BigInt(18),
    inStock: true,
  },
  {
    id: BigInt(3),
    name: "Whistling Rocket",
    description:
      "Rockets that emit a loud whistle before exploding into colourful sparks at peak altitude. For outdoor use only.",
    price: BigInt(280),
    imageUrl:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600",
    category: "Rockets" as unknown as Category,
    packSize: "Pack of 3",
    effectDuration: "10 seconds",
    safetyRating: BigInt(4),
    minAge: BigInt(18),
    inStock: true,
  },
  {
    id: BigInt(4),
    name: "Golden Rain Flower Pot",
    description:
      "A classic flower pot that produces a magnificent golden rain of sparks shooting upward. Safe for home use in open areas.",
    price: BigInt(150),
    imageUrl:
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?w=600",
    category: "FlowerPots" as unknown as Category,
    packSize: "Single",
    effectDuration: "120 seconds",
    safetyRating: BigInt(2),
    minAge: BigInt(10),
    inStock: true,
  },
  {
    id: BigInt(5),
    name: "Coloured Flower Pot",
    description:
      "Vibrant multi-coloured sparks fountain with red, green, gold, and silver hues. Place on flat ground and light from a safe distance.",
    price: BigInt(200),
    imageUrl:
      "https://images.unsplash.com/photo-1609166214994-502d326bafe1?w=600",
    category: "FlowerPots" as unknown as Category,
    packSize: "Pack of 4",
    effectDuration: "90 seconds",
    safetyRating: BigInt(2),
    minAge: BigInt(10),
    inStock: true,
  },
  {
    id: BigInt(6),
    name: "Rainbow Chakkar",
    description:
      "Spinning ground chakkar that spins rapidly emitting beautiful rainbow-coloured sparks in a circular pattern. Place on smooth flat ground.",
    price: BigInt(90),
    imageUrl:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600",
    category: "GroundChakkar" as unknown as Category,
    packSize: "Pack of 6",
    effectDuration: "25 seconds",
    safetyRating: BigInt(2),
    minAge: BigInt(12),
    inStock: true,
  },
  {
    id: BigInt(7),
    name: "Silver Chakkar",
    description:
      "Traditional silver-sparkling chakkar that spins energetically on the ground. A Diwali staple. Ensure no loose clothing while operating.",
    price: BigInt(70),
    imageUrl:
      "https://images.unsplash.com/photo-1543718122-e5cb2c35a4cd?w=600",
    category: "GroundChakkar" as unknown as Category,
    packSize: "Pack of 10",
    effectDuration: "20 seconds",
    safetyRating: BigInt(2),
    minAge: BigInt(12),
    inStock: true,
  },
  {
    id: BigInt(8),
    name: "Multi-Color Aerial Shot 30-Burst",
    description:
      "Spectacular 30-shot aerial barrage launching colourful stars, crackling effects, and glittering trails. Must be secured in sand or a launch tube.",
    price: BigInt(850),
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600",
    category: "AerialShots" as unknown as Category,
    packSize: "Single",
    effectDuration: "60 seconds",
    safetyRating: BigInt(5),
    minAge: BigInt(18),
    inStock: true,
  },
  {
    id: BigInt(9),
    name: "Gold Mine Aerial Shell",
    description:
      "Premium aerial shells that burst into a wide gold mine effect with dense glittering stars filling the sky. Strict 30-metre clearance required.",
    price: BigInt(650),
    imageUrl:
      "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=600",
    category: "AerialShots" as unknown as Category,
    packSize: "Pack of 2",
    effectDuration: "45 seconds",
    safetyRating: BigInt(5),
    minAge: BigInt(18),
    inStock: false,
  },
  {
    id: BigInt(10),
    name: "Atom Bomb Cracker",
    description:
      "Loud thunderous crackers with a sharp explosive sound. Keep away from ears. Do not hold in hand. Suitable for experienced adults only.",
    price: BigInt(180),
    imageUrl:
      "https://images.unsplash.com/photo-1596740027785-8eb2e6f24d06?w=600",
    category: "Bombs" as unknown as Category,
    packSize: "Pack of 50",
    effectDuration: "Instant",
    safetyRating: BigInt(4),
    minAge: BigInt(18),
    inStock: true,
  },
  {
    id: BigInt(11),
    name: "Thunder Cracker",
    description:
      "Powerful crackers with a deep thunder-like boom. Light and step back immediately. For outdoor use only.",
    price: BigInt(120),
    imageUrl:
      "https://images.unsplash.com/photo-1543373072-70c2aecd3039?w=600",
    category: "Bombs" as unknown as Category,
    packSize: "Pack of 25",
    effectDuration: "Instant",
    safetyRating: BigInt(3),
    minAge: BigInt(16),
    inStock: true,
  },
  {
    id: BigInt(12),
    name: "Toy Sparkler Wands",
    description:
      "Child-friendly sparkler wands with slow-burning, low-temperature sparks. Designed for young children with adult supervision.",
    price: BigInt(50),
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
    category: "Novelty" as unknown as Category,
    packSize: "Pack of 12",
    effectDuration: "30 seconds",
    safetyRating: BigInt(1),
    minAge: BigInt(6),
    inStock: true,
  },
  {
    id: BigInt(13),
    name: "Magic Snake",
    description:
      "A fun novelty cracker that produces a growing snake-like ash trail when lit. No sparks or explosions — ideal for very young children.",
    price: BigInt(60),
    imageUrl:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600",
    category: "Novelty" as unknown as Category,
    packSize: "Pack of 20",
    effectDuration: "10 seconds",
    safetyRating: BigInt(1),
    minAge: BigInt(6),
    inStock: true,
  },
];

export const mockBackend: backendInterface = {
  listProducts: async () => sampleProducts,
  listInStock: async () => sampleProducts.filter((p) => p.inStock),
  listByCategory: async (category: Category) =>
    sampleProducts.filter((p) => p.category === category),
  searchProducts: async (term: string) => {
    const lower = term.toLowerCase();
    return sampleProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower)
    );
  },
  getProduct: async (id: bigint) =>
    sampleProducts.find((p) => p.id === id) ?? null,
  addProduct: async () => BigInt(sampleProducts.length),
};
