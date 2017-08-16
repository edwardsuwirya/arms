/**
 * Created by 15050978 on 8/16/2017.
 */
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {CheckInRequestComponent} from "./component/request/check-in-req.component";
/**
 * Created by 15050978 on 8/16/2017.
 */

@NgModule({
    declarations: [
        CheckInRequestComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [],
    providers: []
})
export class CheckInModule {
}
export const CHECK_IN_PATH = [
    {
        path: '',
        component: CheckInRequestComponent,
    },
]