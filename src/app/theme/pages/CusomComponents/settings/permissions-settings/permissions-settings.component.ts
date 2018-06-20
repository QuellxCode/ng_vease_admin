import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Settings_Services } from '../../../../../services/serverServices.settings';
import { PermissionService } from '../../../../../services/permissions.services';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

@Component({
    selector: 'app-permissions-settings',
    templateUrl: './permissions-settings.component.html',
    styleUrls: ["./permissions-settings.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class PermissionsSettingsComponent implements OnInit {

    constructor(private _script: ScriptLoaderService, private settingsServices: Settings_Services, private permissionService: PermissionService) {
    }
    isPermissionAddViewOpen = false;
    permissionForm: FormGroup;
    private permissions: any[];
    ngOnInit() {
        this.permissionForm = new FormGroup({
        'permissionName': new FormControl(null, Validators.required)
        });

        this.settingsServices.getPermission()
         .subscribe((response) => {
             this.permissions = response.data;
             console.log(this.permissions);
             this.permissionService.permissions = this.permissions;
         });
    }

    onSubmit() {
        // console.log(this.permissionForm.value.permissionName);
        this.settingsServices.createPermission(this.permissionForm.value.permissionName)
         .subscribe((response) => {
                // console.log('on submit called');
                // console.log(response);
                // this.permissionService.addPermission(this.permissionForm.value.permissionName);
                this.settingsServices.getPermission()
                .subscribe((response) => {
                    this.permissions = response.data;
                    console.log(this.permissions);
                    this.permissionService.permissions = this.permissions;
                    this.permissionForm.reset();
                });
            }),
            (error: Error) => {
                console.log(error);
            }
    }

    onDelete(item) {
        // console.log(this.permissions.findIndex(fruit => fruit === rand_id));
        console.log(item.rand_id);
        this.settingsServices.deletePermission(item.rand_id)
         .subscribe((respoonse) => {
             this.permissionService.removePermission(item.rand_id);
            // for(var i = 0; i < this.permissions.length; i += 1) {
            //     if(this.permissions[i]['rand_id'] === rand_id) {
            //         this.permissions.splice(i, 1);
            //     }
            // }
         },
        (error) => {
            console.log(error);
        }
        );
        //  this.permissions.filter(t => {
        //      t.rand_id !== rand_id;
        //  });
        //  console.log(this.permissions);
    }

}