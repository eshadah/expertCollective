import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent, ContactUsComponent],
  imports: [
    SharedModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
