import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Appliance} from "../../model/appliance";
import {ApplianceModel} from "../../model/appliancemodel";

@Component({
  selector: 'app-add-client-appliance',
  templateUrl: './add-client-appliance.component.html'
})
export class AddClientApplianceComponent {

  constructor(
    public dialogRef: MatDialogRef<AddClientApplianceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApplianceModel,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
