import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
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


    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    // public BillingandShipping: FormControl;
    public zoom: number;
    @ViewChild('search') public searchElementRef: ElementRef;

    isUrlFormOpen = false;
    isCompanyUrlFormOpen = false;
    constructor(private _script: ScriptLoaderService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    }

    private placess: any;
    private city='';
    private country='';
    private countryCode='';


    ngOnInit() {
        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ['(cities)']
            });
            autocomplete.addListener('place_changed', () => {
              this.ngZone.run(() => {
                // get the place result
                const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                this.placess = place;

             //    for country
                var address_components=autocomplete.getPlace().address_components;
                for(var j =0 ;j<address_components.length;j++)
                {
                 this.city =address_components[0].long_name;
                 if(address_components[j].types[0]=='country')
                {
                    this.country=address_components[j].long_name;
                }
                if(address_components[j].types[0]=='country')
                {
                    this.countryCode=address_components[j].short_name;
                }
                }
                // verify result
                if (place.geometry === undefined || place.geometry === null) {
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

}
