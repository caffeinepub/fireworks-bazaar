import Types "../types/products";
import ProductLib "../lib/products";
import List "mo:core/List";
import Array "mo:core/Array";

mixin (products : List.List<ProductLib.Product>) {
  public query func listProducts() : async [Types.Product] {
    ProductLib.listAll(products);
  };

  public query func getProduct(id : Types.ProductId) : async ?Types.Product {
    ProductLib.getById(products, id);
  };

  public query func listByCategory(category : Types.Category) : async [Types.Product] {
    ProductLib.listByCategory(products, category);
  };

  public query func searchProducts(term : Text) : async [Types.Product] {
    ProductLib.search(products, term);
  };

  public query func listInStock() : async [Types.Product] {
    let all = ProductLib.listAll(products);
    all.filter(func(p : Types.Product) : Bool { p.inStock });
  };

  public func addProduct(
    name : Text,
    description : Text,
    price : Nat,
    imageUrl : Text,
    category : Types.Category,
    packSize : Text,
    effectDuration : Text,
    safetyRating : Nat,
    minAge : Nat,
    inStock : Bool,
  ) : async Types.ProductId {
    let id = ProductLib.nextId(products);
    let product : Types.Product = {
      id;
      name;
      description;
      price;
      imageUrl;
      category;
      packSize;
      effectDuration;
      safetyRating;
      minAge;
      inStock;
    };
    ProductLib.add(products, product);
    id;
  };
};
