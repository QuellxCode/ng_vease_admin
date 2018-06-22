import { Component, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service'
@Component({
    selector: 'app-staff-settings',
    templateUrl: './staff-settings.component.html',
    styleUrls: ["./staff-settings.component.css"]
})

export class StaffSettingsComponent implements AfterViewInit {

    editStaffIndex = undefined;
    constructor(private _script: ScriptLoaderService) {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-wizard-wizard-3',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);

    }

}