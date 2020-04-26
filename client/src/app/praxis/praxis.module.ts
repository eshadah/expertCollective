import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { PraxisRoutingModule } from './praxis-routing.module';
import { PraxisComponent } from './praxis.component';
import { PraxisHomeComponent } from './praxis-home/praxis-home.component';

export function createPraxisTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/praxis/', '.json');
}

@NgModule({
  declarations: [PraxisComponent, PraxisHomeComponent],
  imports: [
    SharedModule,
    PraxisRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createPraxisTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class PraxisModule { }
