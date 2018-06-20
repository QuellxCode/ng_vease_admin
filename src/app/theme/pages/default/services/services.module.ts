import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

/*import { AgmCoreModule, AgmMap } from '@agm/core';
import { CalendarModule } from 'angular-calendar';
*/
import { Server_Services } from '../../../../services/serverServices.services';


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
        ServicesComponent
    ],
    imports: [
        /*CalendarModule.forRoot(),*/
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc',
            libraries: ['places']
          }),
    ],
    exports: [
        RouterModule
    ],
    providers: [Server_Services]
})
export class ServiceModule {


}