import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturesHomeComponent } from './ventures-home.component';

xdescribe('VenturesHomeComponent', () => {
  let component: VenturesHomeComponent;
  let fixture: ComponentFixture<VenturesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenturesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenturesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
