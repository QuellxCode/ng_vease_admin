import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../_services/script-loader.service';


@Component({
    selector: "app-wizard-wizard-3",
    templateUrl: "./wizard-wizard-3.component.html",
    styleUrls: ["../../theme/pages/CusomComponents/settings/staff-settings/staff-settings.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class WizardWizard3Component implements OnInit, AfterViewInit {

    isDisplayStaffEditAndSee = true;
    editStaffIndex = undefined;
    staffs = [
        {
            Pic: "./assets/app/media/img/users/user2.jpg",
            Name: 'Ahmed',
            Mail: 'admin@email.com',
            lastLogin: '24/05/2018 - 2:15 PM',
            active: false
        },
        {
            Pic: "./assets/app/media/img/users/user3.jpg",
            Name: 'Jane',
            Mail: 'admin@email.com',
            lastLogin: '24/05/2018 - 2:15 PM',
            active: true
        },
        {
            Pic: "./assets/app/media/img/users/user5.jpg",
            Name: 'Khan',
            Mail: 'admin@email.com',
            lastLogin: '24/05/2018 - 2:15 PM',
            active: true
        }
    ];
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-wizard-wizard-3',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);

    }

    deleteStaff(staffIndex) {
        this.staffs.splice(staffIndex, 1);
    }

    saveStaff(firstName, lastName) {
        if (this.editStaffIndex != undefined) {
            this.staffs[this.editStaffIndex].Name = firstName + " " + lastName;
            this.editStaffIndex = undefined;
        }
        else {
            this.staffs.push({
                Pic: "./assets/app/media/img/users/user5.jpg",
                Name: firstName + " " + lastName,
                Mail: 'admin@email.com',
                lastLogin: '24/05/2018 - 2:15 PM',
                active: true
            });

        }

        this.isDisplayStaffEditAndSee = false;
    }
    editStaff(staffIndex) {
        console.log('called');
        this.isDisplayStaffEditAndSee = true;
        this.editStaffIndex = staffIndex;
    }

}