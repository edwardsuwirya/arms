import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {DocumentRegistrationComponent} from "./component/form/document-registration.component";
import {DocumentRegistrationService} from "./service/document-registration.service";
import {DocumentRegistrationApprovalComponent} from "./component/approval/document-registration-approval.component";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
/**
 * Created by 15050978 on 8/15/2017.
 */
@NgModule({
    declarations: [
        DocumentRegistrationComponent,
        DocumentRegistrationApprovalComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [
        DocumentRegistrationComponent
    ],
    providers: [
        DocumentRegistrationService
    ]
})
export class DocumentRegistrationModule {
}
export const DOCUMENT_REGISTRATION_PATH = [
    {
        path: '',
        component: DocumentRegistrationComponent,
    },
    {
        path: 'approval',
        component: DocumentRegistrationApprovalComponent,
    }

]
