import List "mo:core/List";
import Types "types/products";
import ProductLib "lib/products";
import ProductsMixin "mixins/products-api";



actor {
  let products = List.empty<Types.Product>();
  ignore (ProductLib.seedProducts(products));

  include ProductsMixin(products);
};
