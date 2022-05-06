import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {Appliance} from "../../model/appliance";
import {AppliancesService} from "../../services/appliances.service";
import {AddClientApplianceComponent} from "../add-client-appliance/add-client-appliance.component";
import {EditClientApplianceComponent} from "../edit-client-appliance/edit-client-appliance.component";

@Component({
  selector: 'app-client-appliance',
  templateUrl: './client-appliance.component.html',
  styleUrls: ['./client-appliance.component.css']
})
export class ClientApplianceComponent implements OnInit {
  id: string;
  appliancesData: Appliance[];

  constructor(private route: ActivatedRoute, private appliancesService: AppliancesService,
              private dialog: MatDialog) {
    this. appliancesData=[] as Appliance[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updateAppliancesData();
  }

  openDialogAdd(): void{
    let applianceModel: Appliance;
    applianceModel={} as Appliance;
    applianceModel.id=0;
    applianceModel.clientId=Number(this.id);
    const dialogRef=this.dialog.open(AddClientApplianceComponent,{
      data: applianceModel
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        this.appliancesService.create(result).subscribe((response:any)=>{
          this.updateAppliancesData();
        });

      }
    });
  }
  updateAppliancesData(){
    this.appliancesService.getByClientId(this.id).subscribe((response:any)=>{
      this.appliancesData=response;
    });
  }

  openDialogUpdate(data: Appliance): void{
    const dialogRef=this.dialog.open(EditClientApplianceComponent,{
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        let actualAppliance = result;

        this.appliancesService.update(actualAppliance.id,result).subscribe(response=>{
          this.updateAppliancesData();
          console.log("Updated");
        })
      }
    });
  }


}

