import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureProjectsComponent } from './venture-projects.component';

describe('VentureProjectsComponent', () => {
  let component: VentureProjectsComponent;
  let fixture: ComponentFixture<VentureProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentureProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
