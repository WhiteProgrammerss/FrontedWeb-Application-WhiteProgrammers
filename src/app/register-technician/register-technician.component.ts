import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-technician',
  templateUrl: './register-technician.component.html',
  styleUrls: ['./register-technician.component.css']
})
export class RegisterTechnicianComponent implements OnInit{
  public registerTechnicianForm !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerTechnicianForm=this.fb.group({
      names:[""],
      lastNames:[""],
      address:[""],
      email:[""],
      password:[""],
      cellphoneNumber:[""]
    })
  }
  signup()
  {
    this.http.post<any>("http://localhost:3000/technicians",this.registerTechnicianForm.value)
      .subscribe(res=>
        {
          alert("SignUp Successfully");
          console.log(res);

          this.registerTechnicianForm.reset();
          this.router.navigate(["login"]);
        },err=>
        {
          alert("Something Went Wrong");
        }
      )
  }

}
