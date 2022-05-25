import {Component, Inject} from "@angular/core";
import { MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppliancesModelService} from "../../services/appliancesmodel.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-client-appliance',
  templateUrl: './add-client-appliance.component.html'
})
export class AddClientApplianceComponent {
  applianceFormGroup= new FormGroup({
    name: new FormControl('',[Validators.required]),
    model: new FormControl('',[Validators.required]),
    imagePath: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddClientApplianceComponent>,private http:HttpClient,private appliancesModelService:AppliancesModelService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
