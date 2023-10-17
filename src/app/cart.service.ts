import { Injectable } from '@angular/core';
import { Categories, Product } from './product-card/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart: Product[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Flip one',
        price: 399,
        image: 'https://telechoice.com.au/wp-content/uploads/2022/10/2660.webp',
        quantity: 0,
        category: Categories.phone,
      },
      {
        id: 2,
        name: 'Iphone 8',
        price: 449,
        image:
          'https://telechoice.com.au/wp-content/uploads/2023/01/iphone-8-plus-front-black-397x706px-jpg-webp.webp',
        quantity: 0,
        category: Categories.phone,
      },
      {
        id: 3,
        name: 'Galaxy s23',
        price: 259,
        image:
          'https://telechoice.com.au/wp-content/uploads/2023/04/s34-1.webp',
        quantity: 0,
        category: Categories.phone,
      },
      {
        id: 4,
        name: 'ROG laptop',
        price: 399,
        image:
          'https://microless.com/cdn/products/357a55aeb99c0020f736798c4909bc81-hi.jpg',
        quantity: 0,
        category: Categories.computer,
      },
      {
        id: 5,
        name: 'XPS 15',
        price: 449,
        image:
          'https://microless.com/cdn/products/8ddba447e3f834678d01f9fdfdc9b13e-md.jpg',
        quantity: 0,
        category: Categories.computer,
      },
      {
        id: 6,
        name: 'Ipad 10',
        price: 259,
        image:
          'https://www.jbhifi.com.au/cdn/shop/products/339331-Product-0-I-638017756040592806.jpg?v=1666151594',
        quantity: 0,
        category: Categories.tablet,
      },
      {
        id: 7,
        name: 'Pixel Tablet',
        price: 399,
        image: 'https://m.media-amazon.com/images/I/71YZxO0GBSL._AC_SX679_.jpg',
        quantity: 0,
        category: Categories.tablet,
      },
      {
        id: 8,
        name: 'PS5',
        price: 449,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png/330px-Black_and_white_Playstation_5_base_edition_with_controller.png',
        quantity: 0,
        category: Categories.console,
      },
      {
        id: 9,
        name: 'Nintendo Switch',
        price: 259,
        image:
          'https://smarthomesounds.sirv.com/live-magento/catalog/product/n/i/nintendoswitch-hw-main.png?profile=smarthome&canvas.width=450&canvas.height=600&canvas.color=ffffff&canvas.opacity=0&w=450&h=600',
        quantity: 0,
        category: Categories.console,
      },
    ];
  }

  getProducts() {
    return this.products;
  }

  addToCart(product: Product) {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
      product.quantity = 1;
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  removeFromCart(product: Product) {
    // this.cart.splice(this.products[produ]
    this.cart.forEach((item, i) => {
      let temp = this.cart;
      if (product.quantity < 1) {
        const removed = temp.splice(1, i);
        this.cart = removed;
      }
    });
  }

  increment(product: Product) {
    product.quantity++;
  }

  decrement(product: Product) {
    product.quantity--;
  }
}
