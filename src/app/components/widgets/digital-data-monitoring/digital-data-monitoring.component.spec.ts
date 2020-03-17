import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDataMonitoringComponent } from './digital-data-monitoring.component';

describe('DigitalDataMonitoringComponent', () => {
  let component: DigitalDataMonitoringComponent;
  let fixture: ComponentFixture<DigitalDataMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDataMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalDataMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
