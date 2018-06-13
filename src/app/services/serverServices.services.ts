import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers  } from '@angular/http';
import { AuthenticationService } from '../auth/_services/authentication.service';
@Injectable()

export class Server_Services {
    constructor (private http: Http, private authenticationService: AuthenticationService) {}

    private getCatagoriesURL = ' http://www.sharjeelkhan.ca/vease/vease-app/api/v1/category-list';

    private getSubCatogriesURL = 'http://www.sharjeelkhan.ca/vease/vease-app//api/v1/sub-category/'

    private createServiceURL = ' http://www.sharjeelkhan.ca/vease/vease-app/api/v1/service';

    private userToken = this.authenticationService.getToken();


    getCategories() {
        console.log(this.userToken);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        // console.log(options);
        return this.http.get(this.getCatagoriesURL, options)
         .map((response) => {
             const data = response.json();
            //  console.log(data.data);
             return data;
         });
    }


    getSubCategories(id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        this.getSubCatogriesURL = this.getSubCatogriesURL + id;
        return this.http.get(this.getCatagoriesURL, options)
        .map((response) => {
            const data = response.json();
            // console.log(data.data);
            return data;
        });
    }

    createService(name, details, category_id, subcategory_id, price, location, latitude, longitude, publish) {
        var headers = new Headers();
        console.log(this.userToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.userToken);
        var options = new RequestOptions({headers: headers});
        var body = {name: name, details: details, category_id: category_id,
                    subcategory_id: subcategory_id, price: price, location: location,
                    latitude: latitude, longitude: longitude, publish: publish
                   }
                   console.log(body);
        return this.http.post(this.createServiceURL , body , options)
           .map((response) => console.log(response));
    }
}