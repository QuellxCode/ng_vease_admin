import { SettingsComponent } from './../settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { StaffSettingsComponent } from './staff-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Staff_Services } from '../../../../../services/staffServices';
import { WizardWizard3Component } from '../../../../../components/wizard3/wizard-wizard-3.component';
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
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        StaffSettingsComponent,
        WizardWizard3Component
    ],
    providers: [Staff_Services]
})
export class StaffSettingsModule {
}