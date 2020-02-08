import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenturesRoutingModule } from './ventures-routing.module';
import { VenturesComponent } from './ventures.component';


@NgModule({
  declarations: [VenturesComponent],
  imports: [
    CommonModule,
    VenturesRoutingModule
  ]
})
export class VenturesModule { }
