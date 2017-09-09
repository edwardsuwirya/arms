import {NgModule} from "@angular/core";
import {LoginComponent} from "./component/login.component";
import {SharedModule} from "../shared/shared.module";
import {LoginService} from "./service/login.service";
/**
 * Created by 15050978 on 8/29/2017.
 */
@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {
}
