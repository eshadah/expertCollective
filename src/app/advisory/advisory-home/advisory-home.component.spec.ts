import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryHomeComponent } from './advisory-home.component';

describe('AdvisoryHomeComponent', () => {
  let component: AdvisoryHomeComponent;
  let fixture: ComponentFixture<AdvisoryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
