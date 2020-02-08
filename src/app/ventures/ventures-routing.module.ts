import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenturesComponent } from './ventures.component';


const routes: Routes = [
  {
    path: '',
    component: VenturesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenturesRoutingModule { }
