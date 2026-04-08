import Types "../types/products";
import List "mo:core/List";

module {
  public type Product = Types.Product;
  public type ProductId = Types.ProductId;
  public type Category = Types.Category;

  public func listAll(products : List.List<Product>) : [Product] {
    products.toArray();
  };

  public func getById(products : List.List<Product>, id : ProductId) : ?Product {
    products.find(func(p) { p.id == id });
  };

  public func listByCategory(products : List.List<Product>, category : Category) : [Product] {
    products.filter(func(p) { p.category == category }).toArray();
  };

  public func search(products : List.List<Product>, term : Text) : [Product] {
    let lower = term.toLower();
    products.filter(func(p) {
      p.name.toLower().contains(#text lower) or
      p.description.toLower().contains(#text lower)
    }).toArray();
  };

  public func nextId(products : List.List<Product>) : ProductId {
    products.size();
  };

  public func add(products : List.List<Product>, product : Product) : () {
    products.add(product);
  };

  public func seedProducts(products : List.List<Product>) : () {
    let samples : [Product] = [
      // Sparklers
      {
        id = 0;
        name = "Gold Sparklers 12-inch";
        description = "Classic gold sparklers that shower brilliant golden sparks. Perfect for family celebrations. Handle with care and keep away from face.";
        price = 120;
        imageUrl = "https://images.unsplash.com/photo-1514912885225-5e9f08f66478?w=600";
        category = #Sparklers;
        packSize = "Pack of 10";
        effectDuration = "45 seconds";
        safetyRating = 3;
        minAge = 12;
        inStock = true;
      },
      {
        id = 1;
        name = "Silver Star Sparklers";
        description = "Dazzling silver sparklers with a bright star-like effect. Great for kids under adult supervision. Burns cool at the base.";
        price = 80;
        imageUrl = "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600";
        category = #Sparklers;
        packSize = "Pack of 6";
        effectDuration = "60 seconds";
        safetyRating = 2;
        minAge = 10;
        inStock = true;
      },
      // Rockets
      {
        id = 2;
        name = "Sky Rocket Classic";
        description = "High-flying rockets that soar into the sky and burst into a dazzling shower of colorful stars. Only for open spaces. Adult supervision mandatory.";
        price = 350;
        imageUrl = "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?w=600";
        category = #Rockets;
        packSize = "Pack of 5";
        effectDuration = "8 seconds burst";
        safetyRating = 4;
        minAge = 18;
        inStock = true;
      },
      {
        id = 3;
        name = "Whistling Rocket";
        description = "Rockets that emit a loud whistle before exploding into colourful sparks at peak altitude. For outdoor use only. Keep spectators 20 metres away.";
        price = 280;
        imageUrl = "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600";
        category = #Rockets;
        packSize = "Pack of 3";
        effectDuration = "10 seconds";
        safetyRating = 4;
        minAge = 18;
        inStock = true;
      },
      // Flower Pots
      {
        id = 4;
        name = "Golden Rain Flower Pot";
        description = "A classic flower pot that produces a magnificent golden rain of sparks shooting upward. Safe for home use in open areas. Do not hold in hand.";
        price = 150;
        imageUrl = "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?w=600";
        category = #FlowerPots;
        packSize = "Single";
        effectDuration = "120 seconds";
        safetyRating = 2;
        minAge = 10;
        inStock = true;
      },
      {
        id = 5;
        name = "Coloured Flower Pot";
        description = "Vibrant multi-coloured sparks fountain with red, green, gold, and silver hues. Place on flat ground and light from a safe distance.";
        price = 200;
        imageUrl = "https://images.unsplash.com/photo-1609166214994-502d326bafe1?w=600";
        category = #FlowerPots;
        packSize = "Pack of 4";
        effectDuration = "90 seconds";
        safetyRating = 2;
        minAge = 10;
        inStock = true;
      },
      // Ground Chakkar
      {
        id = 6;
        name = "Rainbow Chakkar";
        description = "Spinning ground chakkar that spins rapidly emitting beautiful rainbow-coloured sparks in a circular pattern. Place on smooth flat ground. Do not pick up once lit.";
        price = 90;
        imageUrl = "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600";
        category = #GroundChakkar;
        packSize = "Pack of 6";
        effectDuration = "25 seconds";
        safetyRating = 2;
        minAge = 12;
        inStock = true;
      },
      {
        id = 7;
        name = "Silver Chakkar";
        description = "Traditional silver-sparkling chakkar that spins energetically on the ground. A Diwali staple. Ensure no loose clothing while operating.";
        price = 70;
        imageUrl = "https://images.unsplash.com/photo-1543718122-e5cb2c35a4cd?w=600";
        category = #GroundChakkar;
        packSize = "Pack of 10";
        effectDuration = "20 seconds";
        safetyRating = 2;
        minAge = 12;
        inStock = true;
      },
      // Aerial Shots
      {
        id = 8;
        name = "Multi-Color Aerial Shot 30-Burst";
        description = "Spectacular 30-shot aerial barrage launching colourful stars, crackling effects, and glittering trails. Must be secured in sand or a launch tube. Only for adults.";
        price = 850;
        imageUrl = "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600";
        category = #AerialShots;
        packSize = "Single";
        effectDuration = "60 seconds";
        safetyRating = 5;
        minAge = 18;
        inStock = true;
      },
      {
        id = 9;
        name = "Gold Mine Aerial Shell";
        description = "Premium aerial shells that burst into a wide gold mine effect with dense glittering stars filling the sky. Strict 30-metre clearance required.";
        price = 650;
        imageUrl = "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=600";
        category = #AerialShots;
        packSize = "Pack of 2";
        effectDuration = "45 seconds";
        safetyRating = 5;
        minAge = 18;
        inStock = false;
      },
      // Bombs
      {
        id = 10;
        name = "Atom Bomb Cracker";
        description = "Loud thunderous crackers with a sharp explosive sound. Keep away from ears. Do not hold in hand. Suitable for experienced adults only.";
        price = 180;
        imageUrl = "https://images.unsplash.com/photo-1596740027785-8eb2e6f24d06?w=600";
        category = #Bombs;
        packSize = "Pack of 50";
        effectDuration = "Instant";
        safetyRating = 4;
        minAge = 18;
        inStock = true;
      },
      {
        id = 11;
        name = "Thunder Cracker";
        description = "Powerful crackers with a deep thunder-like boom. Light and step back immediately. For outdoor use only. Not for use near animals or in crowded spaces.";
        price = 120;
        imageUrl = "https://images.unsplash.com/photo-1543373072-70c2aecd3039?w=600";
        category = #Bombs;
        packSize = "Pack of 25";
        effectDuration = "Instant";
        safetyRating = 3;
        minAge = 16;
        inStock = true;
      },
      // Novelty
      {
        id = 12;
        name = "Toy Sparkler Wands";
        description = "Child-friendly sparkler wands with slow-burning, low-temperature sparks. Designed for young children with adult supervision. Burns cool for safer handling.";
        price = 50;
        imageUrl = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600";
        category = #Novelty;
        packSize = "Pack of 12";
        effectDuration = "30 seconds";
        safetyRating = 1;
        minAge = 6;
        inStock = true;
      },
      {
        id = 13;
        name = "Magic Snake";
        description = "A fun novelty cracker that produces a growing snake-like ash trail when lit. No sparks or explosions — ideal for very young children with adult supervision.";
        price = 60;
        imageUrl = "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600";
        category = #Novelty;
        packSize = "Pack of 20";
        effectDuration = "10 seconds";
        safetyRating = 1;
        minAge = 6;
        inStock = true;
      },
    ];
    for (p in samples.values()) {
      products.add(p);
    };
  };
};
