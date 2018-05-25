import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()

export class DemoService
{
    constructor(private http:HttpClient) 
    {

    }
    /*
    getData()
    {
      //return this.http.get("http://www.sharjeelkhan.ca/veaseapp/vease-app/api/get-user");
      

      //let params = new HttpParams().set("email", "quellx@test.com").set("password", "123");
      /*params = params.append("email", "quellx@test.com");
      params = params.append("password", "123"); 

      
      
      
      
      let body = new URLSearchParams();
      body.set('email', 'quellx2x@test.com');
      body.set('password', '1234');
      body.set('c_password', '1234');
      body.set('name', 'quellxCod');
      body.set('last_name', 'thelastname');
      body.set('first_name', 'thefirstname');

      
     
      let body = new URLSearchParams();
      body.set('email', 'quellx2x@test.com');
      body.set('password', '1234');
    

      
      return this.http.post("http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login" , body.toString(), httpOptions); 
      
      body.set('email', 'quellx@test.com');
      
        body.set('password', '123');
      
        return this.http.post("http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login", body.toString(), httpOptions );
    


    }
    */
    getDataparams(email:string , password:string )
    {
      let body = new URLSearchParams();
      body.set('email', email);
      body.set('password', password);
      return this.http.post("http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login" , body.toString(), httpOptions);
    }

}