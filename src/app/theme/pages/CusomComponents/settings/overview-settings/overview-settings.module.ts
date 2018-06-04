import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from '../settings.component';
import { OverViewSettingsComponent } from './overview-settings.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxesService } from './../../../../../services/taxes.services';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
    {
        'path': '',
        'component': SettingsComponent,
        'children': [
            {
                'path': '',
                'component': OverViewSettingsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule ,NgbModule , ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc',
            libraries: ['places']
        }),
    ], 
    providers: [TaxesService],
    exports: [
        RouterModule,
    ], declarations: [
        OverViewSettingsComponent,
    ],
})
export class OverViewSettingsModule {
}