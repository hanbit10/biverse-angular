import { Component, OnInit } from '@angular/core';
import { VerseService } from 'src/app/services/verse.service';
import { Verse } from 'src/app/shared/models/Verse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  verses: Verse[] = [];
  constructor(private verseService: VerseService) {
    this.verses = verseService.getAll();
  }
  ngOnInit(): void {}
}
