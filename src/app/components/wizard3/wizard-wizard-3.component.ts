import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { Staff_Services } from '../../services/staffServices';
@Component({
    selector: "app-wizard-wizard-3",
    templateUrl: "./wizard-wizard-3.component.html",
    styleUrls: ["../../theme/pages/CusomComponents/settings/staff-settings/staff-settings.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class WizardWizard3Component implements OnInit, AfterViewInit {

    staffForm: FormGroup;

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
    constructor(private _script: ScriptLoaderService, private staffServices: Staff_Services) {

    }

    companyLocations = ['1st Location', '2nd Location', 'The Median Location', 'Green Location -4th', 'The Last Location'];
    ngOnInit() {
        this.staffForm = new FormGroup({
            'firstname': new FormControl(null, Validators.required),
            'lastname': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'dob': new FormControl(null, Validators.required),
            'companyLocation': new FormControl(null, Validators.required),
            'contactNo': new FormControl(null, Validators.required),
            'facebook': new FormControl(null),
            'twitter': new FormControl(null),
            'instagram': new FormControl(null),
            'linkedIn': new FormControl(null),
            'discription': new FormControl(null),
            'file': new FormControl(null),
            'schedule': new FormControl(null),
            'hourlyRate': new FormControl(null),
            'weekHours': new FormControl(null),
            'note': new FormControl(null),
            'companyTimeZone': new FormControl(null),
            'address': new FormControl(null)
        });

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

    onSubmit() {
        console.log('called');
        console.log(this.fileToUpload);
        console.log('data called');
        console.log(this.staffForm.value.firstname + ' ' + this.staffForm.value.lastname + ' ' +
                    this.staffForm.value.email + ' ' + this.staffForm.value.dob + ' ' +
                    this.staffForm.value.contactNo + ' ' + this.staffForm.value.companyLocation);
        this.staffServices.addStaff(this.staffForm.value.firstname, this.staffForm.value.lastname, this.staffForm.value.email, this.staffForm.value.contactNo,
            this.staffForm.value.dob, this.staffForm.value.companyLocation, this.fileToUpload)
                .subscribe((response: Response)=> {
                    console.log('data saved');
                });

    }
    fileToUpload: File = null;

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    // uploadFileToActivity() {
    //     // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //     //   // do something, if upload success
    //     //   }, error => {
    //     //     console.log(error);
    //     //   });
    //   }

}