import { Component, inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Client } from 'src/app/client/client-profile/model/client';

@Component({
  selector:'app-edit-client-appliance',
  templateUrl: './edit-client-appliance.component.html',
  styleUrls: ['./edit-client-appliance.component.css']
})

export class EditClientApplianceComponent {

  constructor(
    public dialogRef: MatDialogRef<EditClientApplianceComponent>,
    @inject(MAT_DIALOG_DATA) public  data: Client,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
