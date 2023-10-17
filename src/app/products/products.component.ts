import { Component } from '@angular/core';
import { Product } from '../product-card/products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];
  categories: string[] = ['Phones', 'Computers', 'Tablets', 'Consoles'];

  constructor(private cartService: CartService) {}
  ngOninit() {
    this.products = this.cartService.getProducts();
  }
}
