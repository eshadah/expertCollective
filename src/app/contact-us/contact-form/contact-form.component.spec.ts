import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormData } from '../contact-form-data';

xdescribe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate Contact Form Data', () => {
    const testValue: ContactFormData = {
      firstName: 'Abraham',
      lastName: 'French', 
      title: 'Member',
      organization: 'Expert Collective',
      address: 'Dallas, TX, USA',
      phone: '234-567-8901',
      email: 'abraham@expertcollective.org',
      tryingToAchieve: ''
    }
    component.contactUsForm.setValue(testValue);
    expect(component.contactUsForm.value).toBe(testValue);
    
  })

  it('should clear form on Submit', () => {
    const emptyValue: ContactFormData = {
      firstName: '',
      lastName: '', 
      title: '',
      organization: '',
      address: '',
      phone: '',
      email: '',
      tryingToAchieve: ''
    }
    component.contactUsForm.setValue({
      firstName: 'Abraham',
      lastName: 'French', 
      title: 'Member',
      organization: 'Expert Collective',
      address: 'Dallas, TX, USA',
      phone: '234-567-8901',
      email: 'abraham@expertcollective.org',
      tryingToAchieve: ''
    })
    component.onSubmit({});
    
    expect(component.contactUsForm.value).toBe(emptyValue);
  })
});
