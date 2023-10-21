import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersePageComponent } from './verse-page.component';

describe('VersePageComponent', () => {
  let component: VersePageComponent;
  let fixture: ComponentFixture<VersePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersePageComponent]
    });
    fixture = TestBed.createComponent(VersePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
