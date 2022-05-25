import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Client} from "../client/client-profile/model/client";
import {ClientsService} from "../client/client-profile/services/clients.service";


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
   user:Client;

  registerClientFormGroup= new FormGroup({
    names: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    lastNames: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    address: new FormControl('',[Validators.required,Validators.minLength(6)]),
    cellphoneNumber: new FormControl('',[Validators.required, Validators.pattern("^(9)([0-9]){8}$")]),
    email: new FormControl('',[Validators.required,
      Validators.email]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private clientsService:ClientsService)
  {
    this.user={}as Client;
  }

  ngOnInit(): void {
  }

  signup(): void{
    if(this.registerClientFormGroup.valid){
      this.user.id=0;
      this.user.names=this.registerClientFormGroup.get("names")?.value;
      this.user.lastNames=this.registerClientFormGroup.get("lastNames")?.value;
      this.user.address=this.registerClientFormGroup.get("address")?.value;
      this.user.cellphoneNumber=this.registerClientFormGroup.get("cellphoneNumber")?.value;
      this.user.email=this.registerClientFormGroup.get("email")?.value;
      this.user.password=this.registerClientFormGroup.get("password")?.value;
      this.user.planType="None";
     this.clientsService.create(this.user)
        .subscribe(res=>
          {
            alert("SignUp Successfully");
            console.log(res);

            this.registerClientFormGroup.reset();
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
