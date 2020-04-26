import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureFormationComponent } from './venture-formation.component';

xdescribe('VentureFormationComponent', () => {
  let component: VentureFormationComponent;
  let fixture: ComponentFixture<VentureFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentureFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
