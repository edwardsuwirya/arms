/**
 * Created by 15050978 on 9/5/2017.
 */
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {BoxReturnService} from "./service/box-return.service";
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
        BoxReturnService
    ]
})
export class BoxReturnModule {
}
export const BOX_RETURN_PATH = []