import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerseService } from 'src/app/services/verse.service';
import { Verse } from 'src/app/shared/models/Verse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  verses: Verse[] = [];
  constructor(
    private verseService: VerseService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      // if searching then only show the searchterm by name
      // else it shows all the terms
      if (params['searchTerm']) {
        this.verses = this.verseService.getAllVersesBySearchTerm(
          params['searchTerm']
        );
      } else this.verses = verseService.getAll();
    });
    // this.verses = verseService.getAll();
  }
  ngOnInit(): void {}
}
