import Common "common";

module {
  public type ProductId = Common.ProductId;

  public type Category = {
    #Sparklers;
    #Rockets;
    #FlowerPots;
    #GroundChakkar;
    #AerialShots;
    #Bombs;
    #Novelty;
  };

  public type Product = {
    id : ProductId;
    name : Text;
    description : Text;
    price : Nat;
    imageUrl : Text;
    category : Category;
    packSize : Text;
    effectDuration : Text;
    safetyRating : Nat;
    minAge : Nat;
    inStock : Bool;
  };
};
