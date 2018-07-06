import { SettingsComponent } from './../settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        "path": "",
        "component": SettingsComponent,
        "children": [
            {
                "path": "",
                "component": CatalogComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        CatalogComponent
    ]
})
export class CatalogModule {


}