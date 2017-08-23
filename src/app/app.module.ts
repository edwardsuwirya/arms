import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouteModule} from "./app-route/app-route.module";
import {APP_CONFIG, appConfig} from "./shared/model/application-properties";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {DocumentRegistrationModule} from "./document-registration/document-registration.module";
import {ArmsMenuModule} from "./arms-menu/arms-menu.module";
import {CheckInModule} from "./check-in/check-in.module";
import {CheckOutModule} from "./check-out/check-out.module";
import {BoxRegistrationComponent} from "./box-registration/component/form/box-registration.component";
import {BoxRegistrationModule} from "./box-registration/box-registration.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouteModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        HomeModule,
        BoxRegistrationModule,
        DocumentRegistrationModule,
        CheckInModule,
        CheckOutModule
    ],
    providers: [
        {provide: APP_CONFIG, useValue: appConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
