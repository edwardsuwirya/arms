/**
 * Created by 15050978 on 8/16/2017.
 */
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {CheckInRequestComponent} from "./component/request/check-in-req.component";
import {CheckInApprovalComponent} from "./component/approval/check-in.approval.component";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {BoxSendComponent} from "./component/send/box-send.component";
/**
 * Created by 15050978 on 8/16/2017.
 */

@NgModule({
    declarations: [
        CheckInRequestComponent,
        CheckInApprovalComponent,
        BoxSendComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
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
    {
        path: 'approval',
        component: CheckInApprovalComponent,
    },
    {
        path: 'send',
        component: BoxSendComponent,
    },
]