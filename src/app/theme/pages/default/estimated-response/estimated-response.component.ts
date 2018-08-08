import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
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

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: "app-estimate-response",
    templateUrl: "./estimated-response.component.html",
    styleUrls: ["./estimated-response.component.css"],
    animations: [


        trigger('fade',
            [
                state('void', style({ transform: 'scale(0)', height: '60px', position: 'absolute', top: '17%' })),

                transition('void => *', [
                    animate(350, style({ transform: 'scale(1)' }))
                ]),

                transition('* => void', [
                    animate(400)
                ]),
            ]
        )]
})
export class EstimateResponseComponent implements OnInit, AfterViewInit {

    @ViewChild(AgmMap) agmMap: AgmMap;
    @ViewChild('modalContent') modalContent: TemplateRef<any>;
    fileToUpload: File = null;

    isGridView = true;
    viewName = "List View";
    isDisplayDetail = false;
    viewDate: Date = new Date();
    search = true;

    time = { hour: 13, minute: 30 };
    meridian = true;

    serverData: any[];

    toggleMeridian() {
        this.meridian = !this.meridian;
    }

    requestForms: FormGroup;

    constructor(private _script: ScriptLoaderService, private modal: NgbModal) {

    }
    reqBeautyCategories: any[];
    ngOnInit() {
        this.reqBeautyCategories = ['Facial Care', 'Hair Removal', 'Nail Care', 'Event Planning', 'Food & Cattring', 'Pet Services'];
        this.requestForms = new FormGroup({
            'reqName': new FormControl(null, Validators.required),
            'reqDetail': new FormControl(null, Validators.required),
            'reqCategory': new FormControl('Facial Care', Validators.required),
            'reqPrice': new FormControl(null, Validators.required),
            'reqDuration': new FormControl(null, Validators.required),
            'reqContactNumber': new FormControl(null, Validators.required),
            'reqIsPublish': new FormControl(true)
        });
    }


    ngAfterViewInit() {

        this._script.loadScripts('app-services',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/services.js']);




    }

    adjustRadiusMap() {
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
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

    activeDayIsOpen: boolean = true;
    broadcastServiceRequest(recipient, serviceCategory, value, contactNumber, message) {

        recipient.value = '';
        serviceCategory.value = '';
        value = '';
        contactNumber.value = '';
        message = '';
    }
    onSubmit() {    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }


}