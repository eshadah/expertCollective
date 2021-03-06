import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { AdvisoryRoutingModule } from './advisory-routing.module';
import { AdvisoryComponent } from './advisory.component';
import { AdvisoryHomeComponent } from './advisory-home/advisory-home.component';
import { DigitalBusinessTransformationComponent } from './digital-business-transformation/digital-business-transformation.component';
import { InnovationManagementComponent } from './innovation-management/innovation-management.component';
import { VentureFormationComponent } from './venture-formation/venture-formation.component';

export function createAdvisoryTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/advisory/', '.json');
}

@NgModule({
  declarations: [
    AdvisoryComponent, 
    AdvisoryHomeComponent,
    DigitalBusinessTransformationComponent,
    InnovationManagementComponent,
    VentureFormationComponent, 
  ],
  imports: [
    SharedModule,
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
