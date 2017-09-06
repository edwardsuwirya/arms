import {SharedModule} from "../shared/shared.module";
import {CheckOutRequestComponent} from "./component/form/check-out-req.component";
import {NgModule} from "@angular/core";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {BoxReceiveComponent} from "./component/receive/box-receive.component";
import {CheckOutApprovalComponent} from "./component/approval/check-out-approval.component";
import {BoxLendService} from "./service/box-lend.service";
/**
 * Created by 15050978 on 8/16/2017.
 */
@NgModule({
    declarations: [
        CheckOutRequestComponent,
        CheckOutApprovalComponent,
        BoxReceiveComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        BoxLendService
    ]
})
export class CheckOutModule {
}
export const CHECK_OUT_PATH = [
    {
        path: '',
        component: CheckOutRequestComponent,
    },
    {
        path: 'approval',
        component: CheckOutApprovalComponent,
    }, {
        path: 'receive',
        component: BoxReceiveComponent,
    },
]