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
import {CheckInModule} from "./check-in/check-in.module";
import {CheckOutModule} from "./check-out/check-out.module";
import {BoxRegistrationModule} from "./box-registration/box-registration.module";
import {LoginModule} from "./login/login.module";
import {DocumentSearchLendModule} from "./document-search-lend/document-search-lend.module";
import {BoxReturnModule} from "./box-return/box-return.module";
import {BoxMaintenanceModule} from "./box-maintenance/box-maintenance.module";

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
        LoginModule,
        HomeModule,
        BoxRegistrationModule,
        DocumentRegistrationModule,
        DocumentSearchLendModule,
        BoxReturnModule,
        BoxMaintenanceModule,
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
