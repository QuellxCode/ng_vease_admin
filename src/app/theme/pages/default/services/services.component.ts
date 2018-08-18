import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateService } from '../../../../services/defaultServices/companyServices.services';
import { AgmMap, MapsAPILoader } from "@agm/core";

@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit, AfterViewInit {

    @ViewChild(AgmMap) agmMap: AgmMap;

    //Map buttons Start
    isMapDetail = true;
    //Map button End

    //side pop-up
    showServices = false;
    showOrderHistory = false;
    showInfo = false;

    lang: any;
    lat: any;
    lati: number = 51.678418;
    lng: number = 7.809007;

    public searchControl: FormControl;
    servicesForm: FormGroup;
    // @ViewChild('search') public searchElementRef: ElementRef;
    isGridView = true;
    viewName = "List View";
    isDisplayDetail = false;
    viewDate: Date = new Date();
    private latitude: any;
    private longitude: any;
    constructor(private _script: ScriptLoaderService, private createServices: CreateService) {

    }

    ngOnInit() {
    }
    ngAfterViewInit() {

        this._script.loadScripts('app-services',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/services.js']);
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

    adjustRadiusMap() {
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    }

    sideInfoPop(value: string) {
        if (value == "history") {
            this.showServices = false;
            this.showOrderHistory = true;
            this.showInfo = false;
        } else if (value == "service") {
            this.showServices = true;
            this.showOrderHistory = false;
            this.showInfo = false;
        } else {
            this.showServices = false;
            this.showOrderHistory = false;
            this.showInfo = true;
        }
    }
     t= false;
     deselectAll: boolean = false;
    selectAll() {
        this.deselectAll = !this.deselectAll;
    //    console.log(e.target.checked);
       this.t = this.deselectAll;
    //    console.log(this.t);
    }
}