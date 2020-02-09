import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvisoryComponent } from './advisory.component';
import { AdvisoryHomeComponent } from './advisory-home/advisory-home.component';
import { DigitalBusinessTransformationComponent } from './digital-business-transformation/digital-business-transformation.component';
import { InnovationManagementComponent } from './innovation-management/innovation-management.component';
import { VentureFormationComponent } from './venture-formation/venture-formation.component';


const routes: Routes = [
  {
    path: '',
    component: AdvisoryComponent,
    children: [
      {
        path: '',
        component: AdvisoryHomeComponent
      },
      {
        path: 'digital-business-transformation',
        component:  DigitalBusinessTransformationComponent
      },
      {
        path: 'innovation-management',
        component: InnovationManagementComponent
      },
      {
        path: 'venture-formation',
        component: VentureFormationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisoryRoutingModule { }
