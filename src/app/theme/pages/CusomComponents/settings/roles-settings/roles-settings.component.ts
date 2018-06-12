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
    editRoleIndex = undefined;
    roles = [
        {
            roleName: 'DBAdmin',
            memberCount: 2
        },
        {
            roleName: 'Administrator',
            memberCount: 3
        },
        {
            roleName: 'Marketer',
            memberCount: 1
        }
    ];
    saveRole(roleName) {
        if (this.editRoleIndex != undefined) {
            this.roles[this.editRoleIndex].roleName = roleName;
            this.editRoleIndex = undefined;
        }
        else {
            this.roles.push({
                roleName: roleName,
                memberCount: 0
            });
        }


        this.isRoleAddViewOpen = false;

    }
    editRole(roleIndex) {
        this.isRoleAddViewOpen = true;
        this.editRoleIndex = roleIndex;
    }

    deleteRole(roleIndex) {
        this.roles.splice(roleIndex, 1);
    }

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {


    }



}