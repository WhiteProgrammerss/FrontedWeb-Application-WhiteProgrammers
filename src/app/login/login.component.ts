import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Technician} from "../technician/technician-profile/model/technician";
import {Client} from "../client/client-profile/model/client";
import {ClientsService} from "../client/client-profile/services/clients.service";
import {TechniciansService} from "../technician/technician-profile/services/technicians.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: Boolean = false;

  user: Client;
  clientFound: Client;

  technicianData: Technician;
  technicianFound: Technician;

  constructor(private clientsService: ClientsService, private techniciansService: TechniciansService,
              private route:Router) {
    this.user = {} as Client;
    this.clientFound = {} as Client;
    this.technicianData = {} as Technician;
    this.technicianFound = {} as Technician;
  }

  ngOnInit(): void {
  }

  SubmitLogin(){
    this.clientsService.getByEmail(this.user.email).subscribe((clientresponse: any) => {
      if (clientresponse.length > 0) {
        this.clientFound = clientresponse[0];
        if (this.clientFound.password == this.user.password) {
          this.route.navigate(['/client',this.clientFound.id,'client-appliance'])
          console.log("Login Successful as a Client !!");
        } else {
          console.log("Wrong Username or Password !!");
        }
      }
    })

    this.techniciansService.getByEmail(this.user.email).subscribe((technicianresponse: any) => {
      if (technicianresponse.length > 0) {
        this.technicianFound = technicianresponse[0];
        if (this.technicianFound.password == this.user.password) {
          this.route.navigate(['/technician',this.technicianFound.id,'technician-profile']);
          console.log("Login Successful as a Technician !!");
        } else {
          console.log("Wrong Username or Password !!");
        }
      }
    })
  }
}
