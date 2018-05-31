import { Component, OnInit, ViewEncapsulation,  AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
@Component({
    selector: 'app-overview-settings',
    templateUrl: './overview-settings.component.html',
    styleUrls: ['./overview-settings.component.css']
})
export class OverViewSettingsComponent implements OnInit {
    time = {hour: 13, minute: 30};
    time2 = {hour: 20, minute: 50};
    locations = [{
        locnumber:3,
        name: '3rd Location',
        address: 'Missisaaga The Canaada'
    }];
    enterLocationFormDisplay= false;
    constructor(private _script: ScriptLoaderService) {
    }


    addLocation(thenumber : number, name: string , address:string )
    {
        this.locations.push({locnumber: thenumber,
            name: name,
            address : address
        });
        this.enterLocationFormDisplay=false;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-overview-settings',
            ['assets/app/js/dashboard.js']);

    }


}