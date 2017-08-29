import {NgModule} from "@angular/core";
import {LoginComponent} from "./component/login.component";
import {SharedModule} from "../shared/shared.module";
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
    ]
})
export class LoginModule {
}
