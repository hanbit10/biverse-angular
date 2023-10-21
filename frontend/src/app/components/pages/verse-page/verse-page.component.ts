import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { VerseService } from 'src/app/services/verse.service';
import { Verse } from 'src/app/shared/models/Verse';

@Component({
  selector: 'app-verse-page',
  templateUrl: './verse-page.component.html',
  styleUrls: ['./verse-page.component.css'],
})
export class VersePageComponent implements OnInit {
  verse!: Verse;

  // This constructor is used when using only models
  constructor(
    activatedRoute: ActivatedRoute,
    verseService: VerseService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.verse = verseService.getVerseByID(params['id']);
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart() {
    this.cartService.addToCart(this.verse);
    this.router.navigateByUrl('/cart-page');
  }
}
