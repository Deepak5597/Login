import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {Logincred} from '../logincred';
import {Http} from '@angular/http';
import {LoginService} from '../login.service';
import { Response } from '@angular/http/src/static_response';
//import {Router} from '@angular/router';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor(private loginservice:LoginService) { }//private router:Router
  
public  logindata : Logincred;
  response:Response;
  ngOnInit() {
  }

  LoginUser(e){
    let username=e.target.elements[0].value;
   let password=e.target.elements[1].value;
   console.log("UserName:: "+username+"\nPassword:: "+password);
    this.logindata=new Logincred(username,password);
//     e.preventDefault();
//     let username=e.target.elements[0].value;
//     let password=e.target.elements[1].value;
//  alert(username+"  "+password);
//  console.log("UserName:: "+username+"\nPassword:: "+password);
// //this.router.navigate(['dashboard']);
//  return false;

this.loginservice.sendLoginData(this.logindata)
.subscribe(
  (res:Response)=>this.response=res.json()
);

console.log('Login User Completed');
return false;
}
}
