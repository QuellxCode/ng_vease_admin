import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    styleUrls: ["./header-nav.component.css"]
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    name: string;
    email: string;
    constructor() {

    }
    ngOnInit() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.name = currentUser.data.name;
        this.email = currentUser.data.email;
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}