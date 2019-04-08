import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompInputComponent } from './autocomp-input.component';

describe('AutocompInputComponent', () => {
  let component: AutocompInputComponent;
  let fixture: ComponentFixture<AutocompInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
