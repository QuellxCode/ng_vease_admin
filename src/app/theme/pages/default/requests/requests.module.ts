import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DragulaModule } from "ng2-dragula";

import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { RequestsComponent } from "./requests.component";



const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': RequestsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, DragulaModule
    ], exports: [
        RouterModule,
    ], declarations: [
        RequestsComponent,
    ],
})
export class RequestsModule {
}