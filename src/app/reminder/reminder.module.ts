import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ReminderService} from "./service/reminder.service";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {ReminderComponent} from "./component/form/reminder.component";
/**
 * Created by 15050978 on 9/8/2017.
 */
@NgModule({
    declarations: [
        ReminderComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        ReminderService
    ]
})
export class ReminderModule {
}
export const REMINDER_PATH = [
    {
        path: '',
        component: ReminderComponent,
    },
]