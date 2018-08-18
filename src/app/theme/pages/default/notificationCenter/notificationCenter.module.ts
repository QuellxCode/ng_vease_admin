import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotificationCenterComponent } from './notificationCenter.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { HistoryComponent } from './history/histroy.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": NotificationCenterComponent
            },
            {
                'path': 'history',
                'component': HistoryComponent,
            },
        ]
    }
];
@NgModule({
    declarations: [
        NotificationCenterComponent,
        HistoryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class NotificationCenterModule {


}