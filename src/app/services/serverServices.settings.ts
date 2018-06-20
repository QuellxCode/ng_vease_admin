import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers  } from '@angular/http';
import { AuthenticationService } from '../auth/_services/authentication.service';
@Injectable()

export class Settings_Services {
    constructor(private authenticationService: AuthenticationService, private http: Http) {}

    private userToken = this.authenticationService.getToken();


    private postPermissionURL = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/create-staff-permission';

    private getPermissionURL = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/staff-permission';


    createPermission(name) {
        var headers = new Headers();
        // console.log(this.userToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        var body = {name: name}
                   console.log(body);
        return this.http.post(this.postPermissionURL , body , options)
           .map((response) => {
               console.log(response);
            return response.json();
           });
    }

    getPermission() {
        var headers = new Headers();
        // console.log(this.userToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        return this.http.get(this.getPermissionURL, options)
           .map((response) => {
               console.log(response);
            return response.json();
           });
    }

    deletePermission(rand_id) {
         let deletePermissionURL = 'http://www.sharjeelkhan.ca/vease/vease-app/api/v1/delete-staff-permission/';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        deletePermissionURL = deletePermissionURL + rand_id;
        console.log(deletePermissionURL);
        return this.http.delete(deletePermissionURL, options)
           .map((response) => console.log(response));
    }
}
