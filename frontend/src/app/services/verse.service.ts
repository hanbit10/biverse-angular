import { Injectable } from '@angular/core';
import { Verse } from '../shared/models/Verse';
import { sample_verse } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class VerseService {
  constructor() {}

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
}
