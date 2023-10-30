import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Verse } from '../shared/models/Verse';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(verse: Verse): void {
    let cartItem = this.cart.items.find((item) => item.verse.id === verse.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(verse));
    this.setCartToLocalStorage();
  }

  removeFromCart(verseID: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.verse.id != verseID
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.verse.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.verse.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
