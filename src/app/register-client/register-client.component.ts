import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  public registerClientForm !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerClientForm=this.fb.group({
      id:0,
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
    this.http.post<any>("http://localhost:3000/clients",this.registerClientForm.value)
      .subscribe(res=>
        {
          alert("SignUp Successfully");
          console.log(res);

          this.registerClientForm.reset();
          this.router.navigate(["login"]);
        },err=>
        {
          alert("Something Went Wrong");
        }
      )
  }

}
