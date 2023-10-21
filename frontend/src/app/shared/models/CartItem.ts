import { Verse } from './Verse';

export class CartItem {
  constructor(public verse: Verse) {}
  quantity: number = 1;
  price: number = this.verse.price;
}
