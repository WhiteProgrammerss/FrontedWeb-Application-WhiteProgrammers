import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplianceModel} from "../../model/appliancemodel";

@Component({
  selector:'app-edit-client-appliance',
  templateUrl: './edit-client-appliance.component.html',
  styleUrls: ['./edit-client-appliance.component.css']
})

export class EditClientApplianceComponent {

  constructor(
    public dialogRef: MatDialogRef<EditClientApplianceComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: ApplianceModel,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
