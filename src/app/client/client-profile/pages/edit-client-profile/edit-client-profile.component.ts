import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Client} from "../../model/client";

@Component({
  selector: 'app-edit-client-profile',
  templateUrl: './edit-client-profile.component.html',
  styleUrls: ['./edit-client-profile.component.css']
})
export class EditClientProfileComponent  {

  constructor(
    public dialogRef: MatDialogRef<EditClientProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

