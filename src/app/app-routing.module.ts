import { BadLoginComponent } from './OtherComponents/bad-login/bad-login.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'adminMode', loadChildren: './HouseAdmin/house-admin.module#HouseAdminModule'},
  { path:'badLogin', component: BadLoginComponent},
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
