import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerGenerationComponent } from './power-generation.component';

describe('PowerGenerationComponent', () => {
  let component: PowerGenerationComponent;
  let fixture: ComponentFixture<PowerGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
