import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { AsideNavSettingsComponent } from './aside-nav-settings/aside-nav-settings.component';
import { SettingsComponent } from '../pages/CusomComponents/settings/settings.component';
import { SearchButtonComponent } from './searchButton/searchButton.component';
@NgModule({
    declarations: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        AsideNavSettingsComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        SettingsComponent,
        SearchButtonComponent
    ],
    exports: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        AsideNavSettingsComponent,
        SettingsComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        SearchButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}