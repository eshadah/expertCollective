import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBusinessTransformationComponent } from './digital-business-transformation.component';

describe('DigitalBusinessTransformationComponent', () => {
  let component: DigitalBusinessTransformationComponent;
  let fixture: ComponentFixture<DigitalBusinessTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalBusinessTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBusinessTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
