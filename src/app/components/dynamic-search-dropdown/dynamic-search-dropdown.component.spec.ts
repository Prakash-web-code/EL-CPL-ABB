import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchDropdownComponent } from './dynamic-search-dropdown.component';

describe('DynamicSearchDropdownComponent', () => {
  let component: DynamicSearchDropdownComponent;
  let fixture: ComponentFixture<DynamicSearchDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSearchDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
