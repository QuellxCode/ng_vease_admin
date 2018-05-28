import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
/*import { AgmCoreModule, AgmMap } from '@agm/core';
import { CalendarModule } from 'angular-calendar';
*/

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
        CommonModule, RouterModule.forChild(routes), /*CalendarModule.forRoot(),*/ LayoutModule/*, AgmCoreModule.forRoot({
            apiKey: 'AIzaSyABAXCmYooxcSc5GajYQIDIGgM9U2n6vyg'
          })*/
    ], exports: [
        RouterModule
    ], declarations: [
        StaffComponent
    ]
})
export class StaffModule {


}