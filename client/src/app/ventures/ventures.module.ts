import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { VenturesRoutingModule } from './ventures-routing.module';
import { VenturesComponent } from './ventures.component';
import { VenturesHomeComponent } from './ventures-home/ventures-home.component';
import { VentureProjectsComponent } from './venture-projects/venture-projects.component';

export function createVenturesTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/ventures/', '.json');
}

@NgModule({
  declarations: [
    VenturesComponent, 
    VenturesHomeComponent, 
    VentureProjectsComponent
  ],
  imports: [
    SharedModule,
    VenturesRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createVenturesTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class VenturesModule { }
