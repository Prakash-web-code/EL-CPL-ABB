import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPeakMonitoringComponent } from './group-peak-monitoring.component';

describe('GroupPeakMonitoringComponent', () => {
  let component: GroupPeakMonitoringComponent;
  let fixture: ComponentFixture<GroupPeakMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPeakMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPeakMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
