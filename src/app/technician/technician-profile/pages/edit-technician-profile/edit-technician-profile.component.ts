import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Technician} from "../../model/technician";

@Component({
  selector: 'app-edit-technician-profile',
  templateUrl: './edit-technician-profile.component.html',
  styleUrls: ['./edit-technician-profile.component.css']
})
export class EditTechnicianProfileComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTechnicianProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Technician,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
