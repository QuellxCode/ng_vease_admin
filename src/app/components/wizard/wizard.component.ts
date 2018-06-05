import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, NgZone, OnChanges } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterViewInit {


    // public latitude: number;
    // public longitude: number;
    public searchControl: FormControl;
    public companyForm: FormControl;
    // public BillingandShipping: FormControl;
    public zoom: number;
    @ViewChild('search') public searchElementRef: ElementRef;
    @ViewChild('company') public companyElementRef: ElementRef;

    isUrlFormOpen = false;
    isCompanyUrlFormOpen = false;
    constructor(private _script: ScriptLoaderService, private mapsAPILoader: MapsAPILoader,private ngcompanyZone: NgZone, private ngZone: NgZone,private companyMapApiLoader: MapsAPILoader) {

    }
// these are naming conventions for client autocomplete address
     clientPlacess: any;
     clientCity = '';
     clientCountry = '';
     clientCountryCode = '';
     clientMainCity = '';
     clientState = '';
    companyAddressModel = '';


// these are the naming conventions for Company autocomplete address

 companyPlacess: any;
     companyCity = '';
     companyCountry = '';
     companyCountryCode = '';
     companyMainCity = '';
     companyState = '';
     companyPostalCode=''
    companyAddress: string;
   isActive: FormGroup;
    ngOnInit() {

        // for client
        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
              this.ngZone.run(() => {
                const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                this.clientPlacess = place;
                // console.log(this.clientCity);

             //    for country
                var address_components=autocomplete.getPlace().address_components;
                // console.log(address_components);
                for(var j =0 ;j<address_components.length;j++) {

                     this.clientCity =address_components[0].long_name;
                     if(address_components[j].types[0]=='country')
                        {
                            this.clientCountry=address_components[j].long_name;
                        }
                    if(address_components[j].types[0]=='country')
                        {
                            this.clientCountryCode=address_components[j].short_name;
                        }
                }

                // for city

    for (var ac = 0; ac < address_components.length; ac++) {

       var component = address_components[ac];

       if(component.types.includes('sublocality') || component.types.includes('locality')) {
           this.clientMainCity = component.long_name;
       }
       else if (component.types.includes('administrative_area_level_1')) {
            this.clientState = component.short_name;
   }

};







                // verify result
                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }

              });
            });
          });




          // this is location autocomplete for company

          this.companyForm = new FormControl();
          this.companyMapApiLoader.load().then(() => {
            const companyAutoComplete = new google.maps.places.Autocomplete(this.companyElementRef.nativeElement, {
              types: ['address']
            });
            companyAutoComplete.addListener('place_changed', () => {
              this.ngcompanyZone.run(() => {
                const companyPlace: google.maps.places.PlaceResult = companyAutoComplete.getPlace();
                this.companyPlacess = companyPlace;
                // console.log(this.clientPlacess)

             //    for country
                var company_address_components=companyAutoComplete.getPlace().address_components;
                // console.log(company_address_components);
                // for city

    for (var ac = 0; ac < company_address_components.length; ac++) {

       var component = company_address_components[ac];

       if(component.types.includes('sublocality') || component.types.includes('locality')) {
           this.companyMainCity = component.long_name;
       }
       else if (component.types.includes('administrative_area_level_1')) {
        this.companyState = component.short_name;
        // console.log(this.companyState);
}
else if(component.types.includes('route')) {
    this.companyAddressModel = component.long_name;
}



};


        //   For zip code of location.....
// for (var i = 0; i < company_address_components.length; i++) {
//     for (var j = 0; j < company_address_components[i].types.length; j++) {
//       if (company_address_components[i].types[j] == "postal_code") {
//         this.companyPostalCode = company_address_components[i].long_name;
//       }
//     }
// }


if(this.doCheckInit){
    this.billCity = this.companyMainCity;
    this.billAddress = this.companyAddressModel;
    this.billState = this.companyState;
    this.doCheckInit = false;
}




                // verify result
                if (companyPlace.geometry === undefined || companyPlace.geometry === null) {
                  return;
                }

                // set latitude, longitude and zoom
             //    this.latitude = place.geometry.location.lat();
             //    this.longitude = place.geometry.location.lng();
             //    this.zoom = 12;
              });
            });
          });
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-wizard',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);

    }
     billAddress;
     billState;
     billCity;
    doCheck = true;
    doCheckInit = false
    yourfunc(e) {
        if(this.doCheck){
            this.billCity = this.companyMainCity;
            this.billAddress = this.companyAddressModel;
            this.billState = this.companyState;
            this.doCheck = false;
            this.doCheckInit = true;
        }
        else {
            this.billAddress = '';
            this.billCity = '';
            this.billState = '';
            this.doCheck = true;
            this.doCheckInit = false;
        }
        // console.log(this.companyAddressModel);
        // else if(e.target.unchecked) {
        //     console.log(e.target.unchecked);
        // }
     }

}
