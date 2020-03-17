import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCostComponent } from './energy-cost.component';

describe('EnergyCostComponent', () => {
  let component: EnergyCostComponent;
  let fixture: ComponentFixture<EnergyCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
