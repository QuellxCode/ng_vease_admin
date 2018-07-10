import { Component } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

@Component({
    selector: 'app-disputes',
    templateUrl: './disputes.component.html',
    styleUrls: ['./disputes.component.css']

})
export class DisputesComponent {
    complaints = true;
    cardClassActive = false;

    firstRowActive=false;
    secondRowActive=false;
    disputeRightSideActive = false;
    feedBack = false;

    constructor(private _script: ScriptLoaderService) {

    }

    ngAfterViewInit() {

        this._script.loadScripts('app-disputes',
            ['assets/app/js/services.js']);
    }


    activeRow(index:number)
    {
        this.disputeRightSideActive=true;

        if(index==1){
            this.secondRowActive=false;
            this.firstRowActive=true;
        }else{
            this.firstRowActive=false;
            this.secondRowActive=true;
        }
    }
}
