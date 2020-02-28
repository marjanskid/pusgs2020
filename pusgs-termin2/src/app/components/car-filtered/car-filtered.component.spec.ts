import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilteredComponent } from './car-filtered.component';

describe('CarFilteredComponent', () => {
  let component: CarFilteredComponent;
  let fixture: ComponentFixture<CarFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
