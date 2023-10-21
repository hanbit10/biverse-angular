import { Component, OnInit } from '@angular/core';
import { VerseService } from 'src/app/services/verse.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  tags?: Tag[];

  constructor(verseService: VerseService) {
    this.tags = verseService.getAllTags();
  }
  ngOnInit(): void {}
}
