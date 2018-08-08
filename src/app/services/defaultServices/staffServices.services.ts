import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthenticationService } from '../../auth/_services/authentication.service';

@Injectable()

export class StaffServices {
    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    private userToken = this.authenticationService.getToken();


    createStaff() { }

    editStaff() { }

    deleteStaff() { }

    getStaff() { }

}