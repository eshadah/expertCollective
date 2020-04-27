import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenturesComponent } from './ventures.component';
import { VenturesHomeComponent } from './ventures-home/ventures-home.component';


const routes: Routes = [
  {
    path: '',
    component: VenturesComponent,
    children: [
      {
        path: '',
        component: VenturesHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenturesRoutingModule { }
