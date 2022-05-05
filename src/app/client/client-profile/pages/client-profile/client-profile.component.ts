import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditClientProfileComponent} from "../edit-client-profile/edit-client-profile.component";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  id:string;
  clientActual: Client;

  constructor(private clientsService: ClientsService, private route: ActivatedRoute,
              private dialog: MatDialog) {
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.clientActual={} as Client;
  }

  ngOnInit(): void {
    this.getActualData();
  }

  getActualData():void{
    this.clientsService.getById(this.id).subscribe((response:any)=>{
      this.clientActual=response;
    })
  }

  openDialog(data: Client): void {
    const dialogRef=this.dialog.open(EditClientProfileComponent,{
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result!=undefined){
        let clientReceived = result;

        this.clientsService.update(this.id,clientReceived).subscribe(response=>{
          this.getActualData();
        })
      }
    })
  }
}
