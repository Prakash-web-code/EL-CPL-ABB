import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectivityTrendComponent } from './connectivity-trend.component';

describe('ConnectivityTrendComponent', () => {
  let component: ConnectivityTrendComponent;
  let fixture: ComponentFixture<ConnectivityTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectivityTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectivityTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
