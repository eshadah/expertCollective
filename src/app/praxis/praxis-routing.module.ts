import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './praxis.component';


const routes: Routes = [
  {
    path: '',
    component: PraxisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PraxisRoutingModule { }
