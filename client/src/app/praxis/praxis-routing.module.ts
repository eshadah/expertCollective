import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './praxis.component';
import { PraxisHomeComponent } from './praxis-home/praxis-home.component';


const routes: Routes = [
  {
    path: '',
    component: PraxisComponent,
    children: [
      {
        path: '',
        component: PraxisHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PraxisRoutingModule { }
