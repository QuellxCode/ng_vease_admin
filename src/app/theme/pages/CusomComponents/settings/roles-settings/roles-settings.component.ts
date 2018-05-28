import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
    selector: "app-role-settings",
    templateUrl: "./roles-settings.component.html",
    styleUrls: ["./role-settings.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class RolesSettingsComponent implements OnInit, AfterViewInit {

    isRoleAddViewOpen = false;
   
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {


    }



}