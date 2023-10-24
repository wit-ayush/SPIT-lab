import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.cartItems[index].price += this.cartItems[index].price / (this.cartItems[index].quantity - 1);
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartItems[index].price -= this.cartItems[index].price / (this.cartItems[index].quantity + 1);
    }
  }

  getTotalCost() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    const totalCost = this.getTotalCost();
    if (totalCost) {
      alert(`Total Cost of Cart: INR ${totalCost.toFixed(2)}. Do you want to proceed to the payment gateway?`);
    } else {
      alert(`Need to add something, to make something`);
    }
  }
}
