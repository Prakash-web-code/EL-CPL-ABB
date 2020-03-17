import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogDataMonitoringComponent } from './analog-data-monitoring.component';

describe('AnalogDataMonitoringComponent', () => {
  let component: AnalogDataMonitoringComponent;
  let fixture: ComponentFixture<AnalogDataMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogDataMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogDataMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
