import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Appointment} from "../../model/appointment";

@Component({
  selector: 'app-edit-client-appointment',
  templateUrl: './edit-client-appointment.component.html',
  styleUrls: ['./edit-client-appointment.component.css']
})
export class EditClientAppointmentComponent {
  constructor(
    public dialogRef: MatDialogRef<EditClientAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: Appointment,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
