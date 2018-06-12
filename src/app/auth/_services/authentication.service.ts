import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
// import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
    public token: '';
    constructor(private http: Http) {
    }

    // Signup URL for signing up to server
    requrl = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/company-register';

    // SignIn URL for signing in to server
    loginurl = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/company-login';


    // loging in function and stroing the returned usertoken to local storage
    login(email: string, password: string) {
        var headers = new Headers ({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions ({headers: headers});
        var body = {email: email, password: password};
        return this.http.post(this.loginurl, body, options)
         .map ((response: Response) => {
            //  console.log(response);
             let user = response.json();
            //  console.log('token in login');
             console.log(user.data.token);
             localStorage.setItem('token', user.data.token);
             this.token = user.data.token;
             if(user && user.data.token) {
                 this.token = user.data.token;
                 localStorage.setItem('currentUser', JSON.stringify(user));
             }
         });
        // return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


    // signup user
    signupUser(email: string, password: string, c_password: string, name: string) {
        // console.log(name + ' ' + email + ' ' + pass + ' ' + rpass );
        var headers = new Headers ({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions ({headers: headers});
        var body = {email: email, password: password, c_password: c_password, name: name};
        // console.log(body);
        return this.http.post(this.requrl , body , options)
           .map(res => res.json());
    }

    // this function is being called in serverServices.services.ts file
    getToken() {
        // console.log('token in local stroge');
        // console.log(localStorage.getItem('token'));
        // login();
        return localStorage.getItem('token');
    }
}