import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, AgmMap } from '@agm/core';
// _____________Services________________
import { CreateService } from '../../../../services/defaultServices/companyServices.services';
const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ServicesComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        ServicesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc"
        }),
    ],
    exports: [
        RouterModule
    ],
    providers: [CreateService]
})
export class ServiceModule {


}