import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {BoxRegistrationComponent} from "./component/form/box-registration.component";
import {BoxRegistrationService} from "./service/box-registration.service";
/**
 * Created by 15050978 on 8/23/2017.
 */
@NgModule({
    declarations: [
        BoxRegistrationComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        BoxRegistrationComponent,
    ],
    providers: [
        BoxRegistrationService
    ]
})
export class BoxRegistrationModule {
}
export const BOX_REGISTRATION_PATH = [
    {
        path: '',
        component: BoxRegistrationComponent,
    },
]
