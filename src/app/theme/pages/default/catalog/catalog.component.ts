import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
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
    selector: "app-catalog",
    templateUrl: "./catalog.component.html",
    styleUrls: ["./catalog.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class CatalogComponent implements OnInit, AfterViewInit {

    //@ViewChild(AgmMap) agmMap: AgmMap;
    viewDate: Date = new Date();
    isServiceFormShown = false;

    serviceGroup = "Health";


    services = [
        {
            pic: "./assets/app/media/img/logos/Makeup-icon.png",
            serviceName: 'bridal make-up',
            serviceCategory: 'Make-up',
            serviceSubCategory: 'Personal',
            serviceDescription: 'Good quality makeup for bride in a very low cost ',
            Active: false,
            price: 100,
            status: 'Approved'
        },

        {
            pic: "./assets/app/media/img/logos/hair.png",
            serviceName: 'simple style',
            serviceCategory: 'Hair Stylists',
            serviceSubCategory: 'Personal',
            serviceDescription: 'Good quality makeup for bride in a very low cost ',
            Active: true,
            price: 100,
            status: 'Approved'
        },
        {
            pic: "./assets/app/media/img/logos/car.png",
            serviceName: 'Simple car wash',
            serviceCategory: 'Car Wash',
            serviceSubCategory: 'AUTO',
            serviceDescription: 'Good quality makeup for bride in a very low cost ',
            Active: true,
            price: 100,
            status: 'Approved'
        }
    ];
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-catalog',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/staff.js']);




    }

    adjustRadiusMap() {
        /*
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    */
    }





}