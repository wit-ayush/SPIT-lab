import { Injectable } from '@angular/core';
import RecipeType from './RecipeType';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems : RecipeType[] = [];

  addToCart(item: RecipeType) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
}
