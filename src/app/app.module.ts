import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { WizardComponent } from './components/wizard/wizard.component';
import { ThemeComponent } from './theme/theme.component';
import { AgmCoreModule } from '@agm/core';
import { DemoService } from "./services/demo.service";
@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        WizardComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ThemeRoutingModule,
        AuthModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc',
            libraries: ['places']
        }),
    ],
    providers: [ScriptLoaderService, DemoService],
    bootstrap: [AppComponent]
})
export class AppModule { }