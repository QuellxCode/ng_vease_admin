import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { WizardComponent } from "../components/wizard/wizard.component";
import { StaffComponent } from './pages/default/staff/staff.component';
import { StaffSettingsComponent } from './pages/CusomComponents/settings/staff-settings/staff-settings.component';

const routes: Routes = [
    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "blank",
                "loadChildren": ".\/pages\/default\/blank\/blank.module#BlankModule"
            },
            {
                "path": "dashboard",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "requests",
                "loadChildren": ".\/pages\/default\/requests\/requests.module#RequestsModule"
            },
            {
                "path": "services",
                "loadChildren": ".\/pages\/default\/services\/services.module#ServiceModule"
            },
            {
                "path": "staff",
                "loadChildren": ".\/pages\/default\/staff\/staff.module#StaffModule"
            },
            {
                "path": "staff",
                "loadChildren": ".\/pages\/default\/staff\/staff.module#StaffModule"
            },
            {
                "path": "categories",
                "loadChildren": ".\/pages\/default\/categories\/categories.module#CategoriesModule"
            }
        ]

    },
    {
        "path": "index",
        component: WizardComponent,
        "canActivate": [AuthGuard]
    },
    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "settings",
                "loadChildren": ".\/pages\/CusomComponents\/settings\/overview-settings\/overview-settings.module#OverViewSettingsModule"
            }]
    },
    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "staff-settings",
                "loadChildren": ".\/pages\/CusomComponents\/settings\/staff-settings\/staff-settings.module#StaffSettingsModule"
            }]
    },
    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "role-settings",
                "loadChildren": ".\/pages\/CusomComponents\/settings\/roles-settings\/role-settings.module#RolesSettingsModule"
            }]
    }

    // {
    //     'path': '**',
    //     'redirectTo': 'index',
    //     'pathMatch': 'full',
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }