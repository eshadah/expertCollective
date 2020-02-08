import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AdvisoryRoutingModule } from './advisory-routing.module';
import { AdvisoryComponent } from './advisory.component';

export function createAdvisoryTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/advisory/', '.json');
}

@NgModule({
  declarations: [AdvisoryComponent],
  imports: [
    CommonModule,
    AdvisoryRoutingModule,
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
export class AdvisoryModule { }
