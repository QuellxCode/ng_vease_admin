import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/get-user');
    }
    postData() {
        let body = new URLSearchParams();

        body.set('email', 'thequellx@test.com');
        body.set('password', 'the123');
        body.set("c_password", 'the123');
        body.set("name", "thename");

        return this.http.post('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/v1/login', body.toString(), httpOptions);
    }

    public SignUpTheUser(email, password, c_password, name) {
        let body = new URLSearchParams();

        body.set('email', email);
        body.set('password', password);
        body.set("c_password", c_password);
        body.set("name", name);

        return this.http.post('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/v1/register', body.toString(), httpOptions);
    }

}
