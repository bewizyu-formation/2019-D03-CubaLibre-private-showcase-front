import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookArtistComponent } from './book-artist.component';

describe('BookArtistComponent', () => {
  let component: BookArtistComponent;
  let fixture: ComponentFixture<BookArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
