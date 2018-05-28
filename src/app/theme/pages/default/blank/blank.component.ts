import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DemoService } from "../../../../services/demo.service";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BlankComponent implements OnInit {
    public theData;
    title: string = 'Blank Page';
    constructor(private _demoService: DemoService) {
    }

    ngOnInit() {
        // this._demoService.getData().subscribe(
        //     data => { this.theData = data},
        //     err =>  console.error(err),
        //     () =>  console.log((this.theData['data']))
        // );



    }

    sendGet() {
        this._demoService.getData().subscribe(
            data => { this.theData = data; },
            err => console.error(err),
            () => console.log((this.theData))
        );
    }


    sendPost() {
        this._demoService.postData().subscribe(
            data => { this.theData = data },
            err => console.error(err),
            () => console.log((this.theData))
        );
    }


}