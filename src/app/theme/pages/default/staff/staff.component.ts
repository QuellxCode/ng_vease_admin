import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

@Component({
    selector: "app-staff",
    templateUrl: "./staff.component.html",
    styleUrls: ["./staff.component.css"]
})
export class StaffComponent implements OnInit, AfterViewInit {

    //@ViewChild(AgmMap) agmMap: AgmMap;
    isGridView = true;
    viewName = "List View";
    isDisplayDetail = false;
    viewDate: Date = new Date();


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-staff',
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



    changeView() {
        this.isGridView = !this.isGridView;
        if (this.isGridView) {
            this.viewName = "List View";
        }
        else {
            this.viewName = "Grid View";
        }
    }




}