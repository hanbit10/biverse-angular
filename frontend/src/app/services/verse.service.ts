import { Injectable } from '@angular/core';
import { Verse } from '../shared/models/Verse';
import { sample_tags, sample_verse } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class VerseService {
  constructor() {}

  //here the Verse[] is the return array
  getAll(): Verse[] {
    return sample_verse;
  }

  getAllVersesBySearchTerm(searchTerm: string) {
    // call func getAll() and filter
    // use lowerCase to make them the same Case
    // Pizza pizza they should no be difference
    return this.getAll().filter((verse) =>
      verse.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllVersesByTag(tag: string): Verse[] {
    //if then else
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((verse) => verse.tags?.includes(tag));
  }

  getVerseByID(verseId: string): Verse {
    // when getAll is undefined use new Verse
    return this.getAll().find((verse) => verse.id == verseId) ?? new Verse();
  }
}
