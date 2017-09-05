/**
 * Created by 15050978 on 9/5/2017.
 */
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {BoxMaintenanceService} from "./service/box-maintenance.service";
/**
 * Created by 15050978 on 8/23/2017.
 */
@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        BoxMaintenanceService
    ]
})
export class BoxMaintenanceModule {
}
export const BOX_MAINTENANCE_PATH = []
