import { Component, OnInit } from '@angular/core';
import {ApplianceModel} from "../../../client-appliance/model/appliancemodel";
import {ActivatedRoute} from "@angular/router";
import {AppliancesModelService} from "../../../client-appliance/services/appliancesmodel.service";
import {MatDialog} from "@angular/material/dialog";
import {Appointment} from "../../model/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {EditClientAppointmentComponent} from "../edit-client-appointment/edit-client-appointment.component";

@Component({
  selector: 'app-client-appointment',
  templateUrl: './client-appointment.component.html',
  styleUrls: ['./client-appointment.component.css']
})
export class ClientAppointmentComponent implements OnInit {
  id: string;
  appointmentData: Appointment[];
  appliancesModelData: ApplianceModel[];

  constructor(private route: ActivatedRoute, private appointmentsService: AppointmentsService,private appliancesModelService: AppliancesModelService,
              private dialog: MatDialog) {
    this. appointmentData=[] as Appointment[];
    this. appliancesModelData=[] as ApplianceModel[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updateAppointmentsData();
  }

  updateAppointmentsData(){
    this.appointmentData=[];
    this.appliancesModelData=[];
    this.appointmentsService.getAll().subscribe((response:any)=>{
      this.appointmentData=response;
      console.log(response);
      for(let appointmentaux of this.appointmentData ){
        console.log(appointmentaux);
        this.appliancesModelService.getById(appointmentaux.applianceModelId).subscribe((response2:any)=>{
          this.appliancesModelData.push(response2)
        })
      }
    });
  }

  openDialogUpdate(data: Appointment): void{
    const dialogRef=this.dialog.open(EditClientAppointmentComponent,{
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        data.dateAttention=result.get("dateAttention")?.value;
        this.appointmentsService.update(data.id,data).subscribe(response=>{
          this.updateAppointmentsData();
          console.log("Updated");
        })
      }
    });
  }


}

