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
    selector: "app-categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent implements OnInit, AfterViewInit {

    //@ViewChild(AgmMap) agmMap: AgmMap;
    viewDate: Date = new Date();


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-categories',
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