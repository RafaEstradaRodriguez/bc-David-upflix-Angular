import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispSearchComponent } from './disp-search.component';

describe('DispSearchComponent', () => {
  let component: DispSearchComponent;
  let fixture: ComponentFixture<DispSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
