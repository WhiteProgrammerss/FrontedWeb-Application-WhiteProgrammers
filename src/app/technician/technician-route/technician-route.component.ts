import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Technician} from "../technician-profile/model/technician";
import {Report} from "../technician-report/model/report";
import {TechniciansService} from "../technician-profile/services/technicians.service";
import {ReportsService} from "../technician-report/services/reports.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-technician-route',
  templateUrl: './technician-route.component.html',
  styleUrls: ['./technician-route.component.css']
})

export class TechnicianRouteComponent implements OnInit {

  id: String;

  technicianData: Technician[];
  reportsData: Report[];

  constructor(private technicianService: TechniciansService,
              private reportService:ReportsService, private route: ActivatedRoute, private dialog: MatDialog) {
    this.technicianData = [] as Technician[];
    this.reportsData = [] as Report[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  updateReportData(){
    this.reportService.getAll().subscribe((response:any)=>{
      this.reportsData=response;
      console.log(response);
    });
  }
  ngOnInit(): void {
  }

}
