import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisHomeComponent } from './praxis-home.component';

describe('PraxisHomeComponent', () => {
  let component: PraxisHomeComponent;
  let fixture: ComponentFixture<PraxisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraxisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraxisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
