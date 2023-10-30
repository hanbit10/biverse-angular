import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let verseObservable: Observable<Verse[]>;
    activatedRoute.params.subscribe((params) => {
      // if searching then only show the searchterm by name
      // else it shows all the terms
      if (params['searchTerm']) {
        verseObservable = this.verseService.getAllVersesBySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag']) {
        verseObservable = this.verseService.getAllVersesByTag(params['tag']);
      } else verseObservable = verseService.getAll();

      //the variable verseObservable just need to subscribe only once to return the value to this.verses
      verseObservable.subscribe((serverVerses) => {
        this.verses = serverVerses;
      });
    });
    // this.verses = verseService.getAll();
  }
  ngOnInit(): void {}
}
