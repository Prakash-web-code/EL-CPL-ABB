import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeCurrentsComponent } from './real-time-currents.component';

describe('RealTimeCurrentsComponent', () => {
  let component: RealTimeCurrentsComponent;
  let fixture: ComponentFixture<RealTimeCurrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeCurrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeCurrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
