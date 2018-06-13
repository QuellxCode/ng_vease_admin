import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Server_Services } from '../../../../services/serverServices.services';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
// import { CreateService } from './model';
/*
import { AgmMap } from '@agm/core';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
  import { Subject } from 'rxjs';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
  } from 'angular-calendar';


  Calendar And Map Components Not Installed Yet
 */



@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit, AfterViewInit {


    public searchControl: FormControl;
    // createService: CreateService;
    servicesForm: FormGroup;
    //@ViewChild(AgmMap) agmMap: AgmMap;
    @ViewChild('search') public searchElementRef: ElementRef;
    isGridView = true;
    viewName = "List View";
    isDisplayDetail = false;
    viewDate: Date = new Date();
    catogries: any[];
    subCatogries: any[];
    isDisplayForm = true;
    private latitude: any;
    private longitude: any;
    constructor(private _script: ScriptLoaderService, private serverServices: Server_Services,  private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    }

    ngOnInit() {


        // this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    // get the place result
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //    for country
                    var address_components = autocomplete.getPlace().address_components;
                    console.log(address_components);
                    // for (var j = 0; j < address_components.length; j++) {
                    //     this.city = address_components[0].long_name;
                    //     if (address_components[j].types[0] == 'country') {
                    //         this.country = address_components[j].long_name;
                    //     }
                    //     if (address_components[j].types[0] == 'country') {
                    //         this.countryCode = address_components[j].short_name;
                    //     }
                    // }
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    // console.log(this.latitude + ' ' + this.longitude);
                    //    this.zoom = 12;
                });
            });
        });

        this.serverServices.getCategories()
        .subscribe(
            (data) => {
                console.log(data);
                this.catogries = data.data;
                // console.log(this.catogries[0].id + ' ' + this.catogries[0].name);
            }
        );


        // services reactive form
        this.servicesForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'details': new FormControl(null, Validators.required),
        'category': new FormControl(null, Validators.required),
        'subCategory': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'publish': new FormControl(true, Validators.required),
        // 'location': new FormControl(null, Validators.required),
        // 'latitude': new FormControl(null, Validators.required),
        // 'longitude': new FormControl(null, Validators.required),
        });

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-services',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/services.js']);




    }

    adjustRadiusMap() {
        /*
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    */
    }



    changeView() {
        this.isGridView = !this.isGridView;
        if (this.isGridView) {
            this.viewName = "List View";
        }
        else {
            this.viewName = "Grid View";
        }
    }

    getSubCatogery(id) {
        console.log('getsubCategory called');
        console.log(id);
        this.serverServices.getSubCategories(id)
        .subscribe(
            (data) => {
                // console.log(data);
                this.subCatogries = data.data;
                // console.log(this.subCatogries);
                // console.log(this.catogries[0].id + ' ' + this.catogries[0].name);
            }
        );
    }

    changeViewForm() {
        this.isDisplayForm = !this.isDisplayForm;
    }

    onSubmit(location) {
        this.servicesForm.value.location = location;
        console.log('onSubmit called ');
        console.log(
         this.servicesForm.value.name + ' ' + this.servicesForm.value.details + ' ' + this.servicesForm.value.category
         + ' ' + this.servicesForm.value.subCategory + ' ' +  this.servicesForm.value.price + ' ' +
         this.servicesForm.value.location + ' ' + this.servicesForm.value.publish
    );

    this.serverServices.createService( this.servicesForm.value.name, this.servicesForm.value.details,
                this.servicesForm.value.category, this.servicesForm.value.subCategory, this.servicesForm.value.price,
                this.servicesForm.value.location, this.latitude, this.longitude, this.servicesForm.value.publish
                                    )
                                    .subscribe((response) => {

                                    });
    this.servicesForm.reset();
    }

}