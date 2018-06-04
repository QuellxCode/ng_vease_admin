import { Component } from '@angular/core';
@Component({
    selector: 'app-staff-settings',
    templateUrl: './staff-settings.component.html',
    styleUrls: ["./staff-settings.component.css"]
})

export class StaffSettingsComponent {
   
    isDisplayStaffEditAndSee = false;
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
    constructor() 
    {

    }

    deleteStaff(staffIndex)
    {
        this.staffs.splice(staffIndex , 1);
    }

    saveStaff(firstName , lastName)
    {
        if(this.editStaffIndex!=undefined)
        {
            this.staffs[this.editStaffIndex].Name = firstName+" "+lastName;
            this.editStaffIndex=undefined; 
        }
        else
        {
            this.staffs.push({
                Pic: "./assets/app/media/img/users/user5.jpg",
                Name: firstName+" "+lastName,
                Mail: 'admin@email.com',
                lastLogin: '24/05/2018 - 2:15 PM',
                active: true
            });
    
        }
            
        this.isDisplayStaffEditAndSee= false;
    }
    editStaff(staffIndex)
    {
        this.isDisplayStaffEditAndSee = true;
        this.editStaffIndex = staffIndex;
    }
}