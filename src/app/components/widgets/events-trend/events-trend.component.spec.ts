import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTrendComponent } from './events-trend.component';

describe('EventsTrendComponent', () => {
  let component: EventsTrendComponent;
  let fixture: ComponentFixture<EventsTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
