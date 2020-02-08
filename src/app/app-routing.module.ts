import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'advisory', loadChildren: () => import('./advisory/advisory.module').then(mod => mod.AdvisoryModule) },
  { path: 'praxis', loadChildren: () => import('./praxis/praxis.module').then(mod => mod.PraxisModule) },
  { path: 'ventures', loadChildren: () => import('./ventures/ventures.module').then(mod => mod.VenturesModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false, // <-- debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }