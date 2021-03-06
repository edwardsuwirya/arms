import {ArmsMenuComponent} from "./component/panel/arms-menu.component";
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {ArmsMenuItemComponent} from "./component/menu-item/menu-item.component";
import {ArmsMenuService} from "./service/arms-menu.service";
/**
 * Created by 15050978 on 8/16/2017.
 */

@NgModule({
    declarations: [
        ArmsMenuComponent,
        ArmsMenuItemComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ArmsMenuComponent
    ],
    providers: [
        ArmsMenuService
    ]
})
export class ArmsMenuModule {
}