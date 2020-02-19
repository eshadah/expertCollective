import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactUsForm = this.formBuilder.group({
      firstName: '',
      lastName: '', 
      title: '',
      organization: '',
      address: '',
      phone: '',
      email: '',
      tryingToAchieve: ''
    })
  }

  ngOnInit() {
  }
  onSubmit(contactData: any) {
    // TODO: save data to file via service
  }
}
