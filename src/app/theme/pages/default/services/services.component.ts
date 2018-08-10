import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
// import { } from '@types/googlemaps';
import { CreateService } from '../../../../services/defaultServices/companyServices.services';

@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit, AfterViewInit {


    public searchControl: FormControl;
    servicesForm: FormGroup;
    // @ViewChild('search') public searchElementRef: ElementRef;
    isGridView = true;
    viewName = "List View";
    isDisplayDetail = false;
    viewDate: Date = new Date();
    catogries: any[];
    subCatogries: any[];
    // isDisplayForm = true;
    private latitude: any;
    private longitude: any;
    constructor(private _script: ScriptLoaderService, private createServices: CreateService) {

    }

    ngOnInit() {
        // this.mapsAPILoader.load().then(() => {
        //     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //         types: ['address']
        //     });
        //     autocomplete.addListener('place_changed', () => {
        //         this.ngZone.run(() => {
        //             const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //             var address_components = autocomplete.getPlace().address_components;
        //             console.log(address_components);
        //             if (place.geometry === undefined || place.geometry === null) {
        //                 return;
        //             }
        //             this.latitude = place.geometry.location.lat();
        //             this.longitude = place.geometry.location.lng();
        //         });
        //     });
        // });

        // this.createServices.getCategories()
        //     .subscribe(
        //     (data) => {
        //         console.log(data);
        //         this.catogries = data.data;
        //     }
        //     );
        // this.servicesForm = new FormGroup({
        //     'name': new FormControl(null, Validators.required),
        //     'details': new FormControl(null, Validators.required),
        //     'category': new FormControl(null, Validators.required),
        //     'subCategory': new FormControl(null, Validators.required),
        //     'price': new FormControl(null, Validators.required),
        //     'publish': new FormControl(true, Validators.required)
        // });

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-services',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/services.js']);
    }

    adjustRadiusMap() {
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
       
        this.createServices.getSubCategories(id)
            .subscribe(
            (data) => {
                this.subCatogries = data.data;
            }
            );
    }

    // changeViewForm() {
    //     this.isDisplayForm = !this.isDisplayForm;
    // }

    // onSubmit(location) {
    //     this.servicesForm.value.location = location;
    //     this.createServices.createService(this.servicesForm.value.name, this.servicesForm.value.details,
    //         this.servicesForm.value.category, this.servicesForm.value.subCategory, this.servicesForm.value.price,
    //         this.servicesForm.value.location, this.latitude, this.longitude, this.servicesForm.value.publish
    //     )
    //         .subscribe((response) => {

    //         });
    //     this.servicesForm.reset();
    // }

}