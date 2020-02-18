import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { HomeComponent } from './home/home.component';

export function createAdvisoryTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/contact-us/', '.json');
}

@NgModule({
  declarations: [HomeComponent, ContactUsComponent],
  imports: [
    SharedModule,
    ContactUsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createAdvisoryTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class ContactUsModule { }
