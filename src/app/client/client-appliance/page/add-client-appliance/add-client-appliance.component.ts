import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplianceModel} from "../../model/appliancemodel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppliancesService} from "../../services/appliances.service";
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
  addAppliance(): void{
    if(this.applianceFormGroup.valid){
      this.appliancesModelService.create(this.applianceFormGroup.value)
        .subscribe(res=>
          {
            alert("Add appliance Successfully");
            console.log(res);
            this.applianceFormGroup.reset();
          },err=>
          {
            alert("Something Went Wrong");
          }
        )
    }
    else{
      alert('Fix errors before submit');
    }
  }
}
