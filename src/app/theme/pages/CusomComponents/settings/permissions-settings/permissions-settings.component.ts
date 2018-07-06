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

    constructor(private _script: ScriptLoaderService,
        private settingsServices: Settings_Services,
        private permissionService: PermissionService) { }
    isPermissionAddViewOpen = false;
    isPermissionUpdateViewOpen = false;
    permissionForm: FormGroup;
    permissionUpdateForm: FormGroup;
    private permissions: any[];
    loadingSpinner: boolean = true;
    ngOnInit() {
        this.permissionForm = new FormGroup({
            'permissionName': new FormControl(null, Validators.required)
        });
        this.permissionUpdateForm = new FormGroup({
            'UpdateName': new FormControl(null, Validators.required)
        });

        this.settingsServices.getPermission()
            .subscribe((response) => {
                this.permissions = response.data;
                console.log(this.permissions);
                this.permissionService.permissions = this.permissions;
                this.loadingSpinner = false;
            });
    }

    onSubmit() {
        this.loadingSpinner = true;
        this.isPermissionAddViewOpen = false;
        this.settingsServices.createPermission(this.permissionForm.value.permissionName)
            .subscribe((response) => {
                this.settingsServices.getPermission()
                    .subscribe((response) => {
                        this.permissions = response.data;
                        console.log(this.permissions);
                        this.permissionService.permissions = this.permissions;
                        this.permissionForm.reset();
                        this.loadingSpinner = false;
                    });
            }),
            (error: Error) => {
                console.log(error);
                this.loadingSpinner = false;
            }
    }

    onDelete(item) {
        this.loadingSpinner = true;
        console.log(item.rand_id);
        this.settingsServices.deletePermission(item.rand_id)
            .subscribe((respoonse) => {
                this.permissionService.removePermission(item.rand_id);
                // }
                this.loadingSpinner = false;
            },
            (error) => {
                console.log(error);
                this.loadingSpinner = false;
            }
            );
    }
    private onUpdatePermissionId: string;
    private onUpdatePermissionName: string;
    onUpdate(name, id) {
        this.onUpdatePermissionId = id;
        this.onUpdatePermissionName = name;
        this.permissionUpdateForm.get('UpdateName').setValue(name);
    }

    UpdateData() {
        this.loadingSpinner = true;
        this.isPermissionUpdateViewOpen = false;
        console.log(this.permissionUpdateForm.value.UpdateName);
        this.settingsServices.updatePermission(this.onUpdatePermissionId, this.permissionUpdateForm.value.UpdateName)
            .subscribe((response) => {
                this.settingsServices.getPermission()
                    .subscribe((response) => {
                        this.permissions = response.data;
                        console.log(this.permissions);
                        this.permissionService.permissions = this.permissions;
                        this.permissionForm.reset();
                        this.loadingSpinner = false;
                    });
            });
    }

}