import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()

export class DemoService {
    constructor(private http: HttpClient) {

    }
    getDataparams(email: string, password: string) {
        let body = new URLSearchParams();
        body.set('email', email);
        body.set('password', password);
        return this.http.post("http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login", body.toString(), httpOptions);
    }

}