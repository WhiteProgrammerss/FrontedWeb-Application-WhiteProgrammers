import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {Appliance} from "../../model/appliance";
import {AppliancesService} from "../../services/appliances.service";
import {AddClientApplianceComponent} from "../add-client-appliance/add-client-appliance.component";
import {EditClientApplianceComponent} from "../edit-client-appliance/edit-client-appliance.component";
import {ApplianceModel} from "../../model/appliancemodel";
import {AppliancesModelService} from "../../services/appliancesmodel.service";

@Component({
  selector: 'app-client-appliance',
  templateUrl: './client-appliance.component.html',
  styleUrls: ['./client-appliance.component.css']
})
export class ClientApplianceComponent implements OnInit {
  id: string;
  appliancesModelData: ApplianceModel[];

  constructor(private route: ActivatedRoute, private appliancesService: AppliancesService,private appliancesModelService: AppliancesModelService,
              private dialog: MatDialog) {
    this. appliancesModelData=[] as ApplianceModel[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updateAppliancesData();
  }

  openDialogAdd(): void{
    let applianceModel: ApplianceModel;
    applianceModel={} as ApplianceModel;
    applianceModel.id=0;
    applianceModel.clientId=Number(this.id);
    const dialogRef=this.dialog.open(AddClientApplianceComponent,{
      data: applianceModel
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        applianceModel.name=result.get("name")?.value;
        applianceModel.model=result.get("model")?.value;
        applianceModel.imagePath=result.get("imagePath")?.value;
        this.appliancesModelService.create(applianceModel).subscribe((response:any)=>{
          this.updateAppliancesData();
          alert("Add appliance Successfully");
        });
      }
    });
  }
  updateAppliancesData(){
    this.appliancesModelService.getAll().subscribe((response:any)=>{
      this.appliancesModelData=response;
      console.log(response);
    });
  }

  openDialogUpdate(data: ApplianceModel): void{
    const dialogRef=this.dialog.open(EditClientApplianceComponent,{
      data: {...data}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        data.name=result.get("name")?.value;
        data.model=result.get("model")?.value;
        data.imagePath=result.get("imagePath")?.value;
        this.appliancesModelService.update(data.id,data).subscribe(response=>{
          this.updateAppliancesData();
          console.log("Updated");
        })
      }
    });
  }
}

