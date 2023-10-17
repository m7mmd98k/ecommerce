import { Component } from '@angular/core';
import { Product } from '../product-card/products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Product[] = [];
  public totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.calculateTotalprice();
  }

  clearCart() {
    console.log('Cart before clear:', this.cart);
    this.cartService.clearCart();
    this.cart = [];
    this.totalPrice = 0;
    console.log('Cart after clear:', this.cart);
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  increment(product: Product) {
    this.cartService.increment(product);
    this.calculateTotalprice();
  }
  decrement(product: Product) {
    this.cartService.decrement(product);
    this.removeFromCart(product);
    this.calculateTotalprice();
  }

  // calculateTotalprice(product: Product){
  //   this.cart.forEach((a,b)=>{
  //     return a.price * a.quantity + b.price * b.quantity
  //   })
  // }
  calculateTotalprice() {
    this.totalPrice = 0;
    this.cart.forEach(({ price, quantity }) => {
      this.totalPrice += price * quantity;
    });
  }
}
