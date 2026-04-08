import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ProductId = bigint;
export interface Product {
    id: ProductId;
    inStock: boolean;
    packSize: string;
    name: string;
    minAge: bigint;
    description: string;
    effectDuration: string;
    imageUrl: string;
    category: Category;
    safetyRating: bigint;
    price: bigint;
}
export enum Category {
    Novelty = "Novelty",
    Bombs = "Bombs",
    Sparklers = "Sparklers",
    FlowerPots = "FlowerPots",
    GroundChakkar = "GroundChakkar",
    AerialShots = "AerialShots",
    Rockets = "Rockets"
}
export interface backendInterface {
    addProduct(name: string, description: string, price: bigint, imageUrl: string, category: Category, packSize: string, effectDuration: string, safetyRating: bigint, minAge: bigint, inStock: boolean): Promise<ProductId>;
    getProduct(id: ProductId): Promise<Product | null>;
    listByCategory(category: Category): Promise<Array<Product>>;
    listInStock(): Promise<Array<Product>>;
    listProducts(): Promise<Array<Product>>;
    searchProducts(term: string): Promise<Array<Product>>;
}
