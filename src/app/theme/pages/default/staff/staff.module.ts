import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StaffComponent } from "./staff.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { DefaultComponent } from "../default.component";
import { AgmCoreModule, AgmMap } from "@agm/core";

import { StaffServices } from "../../../../services/defaultServices/staffServices.services";
// import { } from './../'
import { MapViewStaffComponent } from "./mapviewStaff/mapviewStaff.component";
import { RescheduleComponent } from './reschedule/reschedule.component';
const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: StaffComponent
      },
      {
        path: "mapView",
        component: MapViewStaffComponent
      }
      ,
      {
        path: "rescheduleStaff",
        component: RescheduleComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc"
    })
  ],
  exports: [RouterModule],
  declarations: [StaffComponent, RescheduleComponent, MapViewStaffComponent],
  providers: [StaffServices]
})
export class StaffModule {}
