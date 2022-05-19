import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplianceModel} from "../../model/appliancemodel";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'app-edit-client-appliance',
  templateUrl: './edit-client-appliance.component.html',
  styleUrls: ['./edit-client-appliance.component.css']
})

export class EditClientApplianceComponent {
  editApplianceFormGroup= new FormGroup({
    name: new FormControl('',[Validators.required]),
    model: new FormControl('',[Validators.required]),
    imagePath: new FormControl('',[Validators.required]),
  });


  constructor(
    public dialogRef: MatDialogRef<EditClientApplianceComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: ApplianceModel,
  ){
    this.editApplianceFormGroup.setValue({
      name:data.name,
      model:data.model,
      imagePath:data.imagePath
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
