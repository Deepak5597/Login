import { Injectable } from '@angular/core';
import {Http,HttpModule,Response,Headers,RequestOptions} from '@angular/http';
import {Logincred} from './logincred';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
http:Http;
response:Response;

  constructor(public _http: Http) {
    this.http=_http;
   }

   sendLoginData(logincred :Logincred){
    //  console.log('send Login data file');
    console.log('login cred :- '+logincred.qlid+"   "+logincred.password);
    let header =new Headers({
      'Content-Type':'application/json'
    });
    
    let option=new RequestOptions({headers : header});
    let data=JSON.stringify(logincred);
    console.log('send Login data file');
    return this.http.post('http://localhost:7200/loginPortal',data,option).map((res:Response)=>res.json());

   
  }
  
}
