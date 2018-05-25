import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RolesSettingsComponent } from './roles-settings.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from './../settings.component';

const routes: Routes = [
    {
        "path": "",
        "component": SettingsComponent,
        "children": [
            {
                "path": "",
                "component": RolesSettingsComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        RolesSettingsComponent
    ]
})
export class RolesSettingsModule {



}