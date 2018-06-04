import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterViewInit {

    isUrlFormOpen = false;
    isCompanyUrlFormOpen = false;
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-wizard',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);

    }

}
