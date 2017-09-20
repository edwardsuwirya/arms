/**
 * Created by edo on 06/05/2017.
 */
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./component/home/home-page.component";
import {SharedModule} from "../shared/shared.module";
import {WelcomePageComponent} from "./component/welcome/welcome-page.component";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";

@NgModule({
    declarations: [
        HomePageComponent,
        WelcomePageComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [
        HomePageComponent,
        WelcomePageComponent
    ],
    providers: []
})
export class HomeModule {
}
