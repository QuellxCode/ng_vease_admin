import { Injectable } from '@angular/core';
import { AuthenticationService } from '../auth/_services/authentication.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { last } from 'rxjs/operators/last';

@Injectable()

export class Staff_Services {
    private addStaffURL = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/add-staff';

    private userToken = this.authenticationService.getToken();

    constructor(private authenticationService: AuthenticationService, private http: Http) {}


    addStaff(first_name, last_name, email, contact_no, date_of_birth, company_location, file) {
        console.log(this.userToken);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        var body = {email: email, first_name: first_name, last_name: last_name, date_of_birth: date_of_birth, company_location: company_location, contact_no: contact_no};
        console.log(body);
        return this.http.post(this.addStaffURL , body , options)
        .map((response) => {
            console.log(response);
         return response.json();
        });
    }
}