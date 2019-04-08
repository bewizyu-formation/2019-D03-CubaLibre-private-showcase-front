import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserMenuComponent } from './home-user-menu.component';

describe('HomeUserMenuComponent', () => {
  let component: HomeUserMenuComponent;
  let fixture: ComponentFixture<HomeUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
