import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PraxisRoutingModule } from './praxis-routing.module';
import { PraxisComponent } from './praxis.component';


@NgModule({
  declarations: [PraxisComponent],
  imports: [
    CommonModule,
    PraxisRoutingModule
  ]
})
export class PraxisModule { }
