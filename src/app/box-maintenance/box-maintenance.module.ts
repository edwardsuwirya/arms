/**
 * Created by 15050978 on 9/5/2017.
 */
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {BoxMaintenanceService} from "./service/box-maintenance.service";
import {BoxMaintenanceRequestComponent} from "./component/request/box-maintenance-request.component";
import {BoxMaintenanceRequestApprovalComponent} from "./component/approval/box-maintenance-request-approval.component";
import {BoxMaintenanceComponent} from "./component/maintenance/box-maintenance.component";
import {DocumentRegistrationModule} from "../document-registration/document-registration.module";
import {BoxMaintenanceApprovalComponent} from "./component/maintenance-approval/box-maintenance-approval.component";
/**
 * Created by 15050978 on 8/23/2017.
 */
@NgModule({
    declarations: [
        BoxMaintenanceRequestComponent,
        BoxMaintenanceRequestApprovalComponent,
        BoxMaintenanceComponent,
        BoxMaintenanceApprovalComponent
    ],
    imports: [
        SharedModule,
        DocumentRegistrationModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        BoxMaintenanceService
    ]
})
export class BoxMaintenanceModule {
}
export const BOX_MAINTENANCE_PATH = [
    {
        path: 'request',
        component: BoxMaintenanceRequestComponent,
    },
    {
        path: 'requestApproval',
        component: BoxMaintenanceRequestApprovalComponent,
    },
    {
        path: '',
        component: BoxMaintenanceComponent,
    },
    {
        path: 'approval',
        component: BoxMaintenanceApprovalComponent,
    },
]
