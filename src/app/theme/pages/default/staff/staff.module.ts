import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';

import { StaffServices } from '../../../../services/defaultServices/staffServices.services';
const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": StaffComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        StaffComponent,
    ],
    providers: [StaffServices]
})
export class StaffModule {


}