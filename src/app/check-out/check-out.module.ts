import {SharedModule} from "../shared/shared.module";
import {CheckOutRequestComponent} from "./component/check-out-req.component";
import {NgModule} from "@angular/core";
/**
 * Created by 15050978 on 8/16/2017.
 */
@NgModule({
    declarations: [
        CheckOutRequestComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [],
    providers: []
})
export class CheckOutModule {
}
export const CHECK_OUT_PATH = [
    {
        path: '',
        component: CheckOutRequestComponent,
    },
]