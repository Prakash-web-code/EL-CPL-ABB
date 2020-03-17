import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsearchdropdownComponent } from './basicsearchdropdown.component';

describe('BasicsearchdropdownComponent', () => {
  let component: BasicsearchdropdownComponent;
  let fixture: ComponentFixture<BasicsearchdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsearchdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsearchdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
