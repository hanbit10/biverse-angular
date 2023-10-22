import { Injectable } from '@angular/core';
import { Verse } from '../shared/models/Verse';
import { sample_tags, sample_verse } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  VERSES_BY_SEARCH_URL,
  VERSES_BY_TAG_URL,
  VERSES_TAGS_URL,
  VERSES_URL,
  VERSE_BY_ID_URL,
} from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class VerseService {
  constructor(private http: HttpClient) {}

  //here the Verse[] is the return array
  getAll(): Observable<Verse[]> {
    return this.http.get<Verse[]>(VERSES_URL);
  }

  getAllVersesBySearchTerm(searchTerm: string) {
    // call func getAll() and filter
    // use lowerCase to make them the same Case
    // Pizza pizza they should no be difference
    // return this.getAll().filter((verse) =>
    //   verse.name?.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    return this.http.get<Verse[]>(VERSES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(VERSES_TAGS_URL);
  }

  getAllVersesByTag(tag: string): Observable<Verse[]> {
    //if then else
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Verse[]>(VERSES_BY_TAG_URL + tag);
  }

  getVerseByID(verseId: string): Observable<Verse> {
    // when getAll is undefined use new Verse
    return this.http.get<Verse>(VERSE_BY_ID_URL + verseId);
  }
}
