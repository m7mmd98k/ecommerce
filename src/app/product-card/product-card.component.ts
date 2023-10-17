import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = ['Phones', 'Computers', 'Tablets', 'Consoles'];
  cart: Product[] = [];
  cachedProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cachedProducts = this.cartService.getProducts();
    this.products = this.cartService.getProducts();
    if (this.cartService.getCart().length === 0) {
      this.products.map((x) => (x.quantity = 0));
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onSelectedCategory(event: any) {
    let selectedCategory = event.value;
    if (selectedCategory === 0) {
      this.products = this.cachedProducts;
      return;
    }
    const result = this.cachedProducts.filter(
      (category) => category.category === selectedCategory
    );
    this.products = result;
  }
}
