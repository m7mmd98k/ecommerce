import { Product } from "../product-card/products.model";

export class CartItem{
    
    constructor(
        public product: Product,
        public quantity: number,


    )
    {}

}