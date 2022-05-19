import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-technician',
  templateUrl: './register-technician.component.html',
  styleUrls: ['./register-technician.component.css']
})
export class RegisterTechnicianComponent implements OnInit{
  registerTechnicianFormGroup= new FormGroup({
    names: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    lastNames: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    address: new FormControl('',[Validators.required,Validators.minLength(6)]),
    cellphoneNumber: new FormControl('',[Validators.required, Validators.pattern("^(9)([0-9]){8}$")]),
    email: new FormControl('',[Validators.required,
      Validators.email]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  signup(): void{
    if(this.registerTechnicianFormGroup.valid){
      this.http.post<any>("http://localhost:3000/technicians",this.registerTechnicianFormGroup.value)
        .subscribe(res=>
          {
            alert("SignUp Successfully");
            console.log(res);

            this.registerTechnicianFormGroup.reset();
            this.router.navigate(["login"]);
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
