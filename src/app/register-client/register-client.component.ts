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

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private clientsService:ClientsService) { }

  ngOnInit(): void {
  }

  signup(): void{
    if(this.registerClientFormGroup.valid){
     this.clientsService.create(this.registerClientFormGroup.value)
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
