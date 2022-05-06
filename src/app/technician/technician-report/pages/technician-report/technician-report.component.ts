import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Technician} from "../../../technician-profile/model/technician";
import {Report} from "../../model/report";
import {TechniciansService} from "../../../technician-profile/services/technicians.service";
import {ReportsService} from "../../services/reports.service";

@Component({
  selector: 'app-technician-report',
  templateUrl: './technician-report.component.html',
  styleUrls: ['./technician-report.component.css']
})
export class TechnicianReportComponent implements OnInit {
  id: String;

  technicianData: Technician[];
  reportsData: Report[];

  constructor(private technicianService: TechniciansService,
              private reportsService:ReportsService, private route: ActivatedRoute) {
    this.technicianData = [] as Technician[];
    this.reportsData = [] as Report[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.reportsService.getAll().subscribe((response:any)=>{
      this.reportsData=response;
    })
  }
}
