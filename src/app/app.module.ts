import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterTechnicianComponent } from './register-technician/register-technician.component';
import { ClientPlanComponent } from './client/client-plan/client-plan.component';
import { ClientReservationComponent } from './client/client-reservation/client-reservation.component';
import { ClientApplianceComponent } from './client/client-appliance/page/client-appliance/client-appliance.component';
import {MatMenuModule} from "@angular/material/menu";
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { ClientNavbarComponent } from './client/client-navbar/client-navbar.component';
import { TechnicianNavbarComponent } from './technician/technician-navbar/technician-navbar.component';
import {ClientsService} from "./client/client-profile/services/clients.service";
import {TechniciansService} from "./technician/technician-profile/services/technicians.service";
import { TechnicianProfileComponent } from './technician/technician-profile/pages/technician-profile/technician-profile.component';
import { TechnicianRouteComponent } from './technician/technician-route/technician-route.component';
import { TechnicianReportComponent } from './technician/technician-report/technician-report.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ClientProfileComponent } from './client/client-profile/pages/client-profile/client-profile.component';
import { EditClientProfileComponent } from './client/client-profile/pages/edit-client-profile/edit-client-profile.component';
import { EditTechnicianProfileComponent } from './technician/technician-profile/pages/edit-technician-profile/edit-technician-profile.component';
import { AddClientApplianceComponent } from './client/client-appliance/page/add-client-appliance/add-client-appliance.component';
import {
  EditClientApplianceComponent
} from "./client/client-appliance/page/edit-client-appliance/edit-client-appliance.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppliancesService} from "./client/client-appliance/services/appliances.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegisterClientComponent,
    RegisterTechnicianComponent,
    ClientPlanComponent,
    ClientReservationComponent,
    ClientApplianceComponent,
    HomeNavbarComponent,
    ClientNavbarComponent,
    TechnicianNavbarComponent,
    TechnicianProfileComponent,
    TechnicianRouteComponent,
    TechnicianReportComponent,
    ClientProfileComponent,
    EditClientProfileComponent,
    EditTechnicianProfileComponent,
    AddClientApplianceComponent,
    EditClientApplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule

  ],
  providers: [
    ClientsService,
    TechniciansService,
    AppliancesService,
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    EditClientProfileComponent,
    EditTechnicianProfileComponent,
    AddClientApplianceComponent,
    EditClientApplianceComponent,
  ]
})
export class AppModule { }
