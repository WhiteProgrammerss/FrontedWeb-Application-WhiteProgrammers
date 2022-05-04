import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import {ClientProfileComponent} from "./client/client-profile/client-profile.component";
import {ClientApplianceComponent} from "./client/client-appliance/client-appliance.component";
import {ClientPlanComponent} from "./client/client-plan/client-plan.component";
import {ClientReservationComponent} from "./client/client-reservation/client-reservation.component";
import {RegisterClientComponent} from "./register-client/register-client.component";
import {RegisterTechnicianComponent} from "./register-technician/register-technician.component";
import {TechnicianProfileComponent} from "./technician/technician-profile/technician-profile.component";
import {TechnicianReportComponent} from "./technician/technician-report/technician-report.component";
import {TechnicianRouteComponent} from "./technician/technician-route/technician-route.component";


const routes: Routes = [

      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home',  component: HomeComponent},
      {path: 'login',  component: LoginComponent},
      {path: 'register',  component: RegisterComponent},
      {path: 'register-technician',  component: RegisterTechnicianComponent},
      {path: 'register-client',  component: RegisterClientComponent},
  {path: 'client/:id', children: [
      { path: '', redirectTo: 'client-profile', pathMatch: 'full'},
      {path: 'reservation', component: ClientReservationComponent},
      {path: 'appliance',  component: ClientApplianceComponent},
      {path: 'plan', component: ClientPlanComponent},
      {path: 'client-profile', component: ClientProfileComponent}
    ]
  },
  { path: 'technician/:id', children:[
      { path: '', redirectTo: 'technician-profile',pathMatch: 'full'},
      { path: 'technician-profile', component: TechnicianProfileComponent},
      { path: 'route', component: TechnicianRouteComponent},
      { path: 'reports', component: TechnicianReportComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
