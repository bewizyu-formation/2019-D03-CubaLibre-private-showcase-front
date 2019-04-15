import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPresentationComponent } from './artist-presentation.component';

describe('ArtistPresentationComponent', () => {
  let component: ArtistPresentationComponent;
  let fixture: ComponentFixture<ArtistPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
