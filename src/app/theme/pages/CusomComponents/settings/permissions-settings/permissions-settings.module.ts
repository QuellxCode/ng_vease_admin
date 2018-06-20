import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PermissionsSettingsComponent } from './permissions-settings.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from './../settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Settings_Services } from '../../../../../services/serverServices.settings';
import { PermissionService } from '../../../../../services/permissions.services';
const routes: Routes = [
    {
        "path": "",
        "component": SettingsComponent,
        "children": [
            {
                "path": "",
                "component": PermissionsSettingsComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        PermissionsSettingsComponent
    ],
    providers: [Settings_Services, PermissionService]
})
export class PermissionsSettingsModule {



}