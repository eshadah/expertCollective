import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationManagementComponent } from './innovation-management.component';

describe('InnovationManagementComponent', () => {
  let component: InnovationManagementComponent;
  let fixture: ComponentFixture<InnovationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
