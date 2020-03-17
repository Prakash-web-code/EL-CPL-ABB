import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakMonitoringComponent } from './peak-monitoring.component';

describe('PeakMonitoringComponent', () => {
  let component: PeakMonitoringComponent;
  let fixture: ComponentFixture<PeakMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
