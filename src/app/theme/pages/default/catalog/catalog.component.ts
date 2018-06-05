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
            pic: "./assets/app/media/img/users/user2.jpg",
            serviceName: 'The Service',
            serviceType:'Service',
            purchaseDate: '12/03/2017',
            expiryDate: '19/4/2017',
            order: 'Service',
            supplier: 'ABC Company',
            amount:100,
            status:'Approved'
        },

        {
            pic: "./assets/app/media/img/users/user2.jpg",
            serviceName: 'The Service 2',
            serviceType:'Service',
            purchaseDate: '12/03/2017',
            expiryDate: '19/4/2017',
            order: 'Service',
            supplier: 'XYZ Company',
            amount:200,
            status:'Rejected'
        },
        {
            pic: "./assets/app/media/img/users/user2.jpg",
            serviceName: 'The Service 3',
            serviceType:'Service',
            purchaseDate: '12/03/2017',
            expiryDate: '19/4/2017',
            order: 'Service',
            supplier: 'UVW Company',
            amount:200,
            status:'Approved'
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