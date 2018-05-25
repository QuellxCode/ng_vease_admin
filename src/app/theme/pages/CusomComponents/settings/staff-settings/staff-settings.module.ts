import {  SettingsComponent } from './../settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { StaffSettingsComponent } from './staff-settings.component';


const routes: Routes = [
    {
        'path': '',
        'component': SettingsComponent,
        'children': [
            {
                'path': '',
                'component': StaffSettingsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        StaffSettingsComponent,
    ],
})
export class StaffSettingsModule {
}