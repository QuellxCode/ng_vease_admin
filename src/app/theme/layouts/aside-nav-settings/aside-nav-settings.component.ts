import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav-settings",
    templateUrl: "./aside-nav-settings.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavSettingsComponent implements OnInit, AfterViewInit {


    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();

    }

}