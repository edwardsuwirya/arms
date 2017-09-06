import {SharedModule} from "../shared/shared.module";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {DocumentReturnService} from "./service/document-return.service";
import {DocumentReturnComponent} from "./component/return/document-return.component";
import {DocumentReturnApprovalComponent} from "./component/return-approval/document-return-approval.component";
import {NgModule} from "@angular/core";
/**
 * Created by edo on 06/09/2017.
 */
@NgModule({
    declarations: [
        DocumentReturnComponent,
        DocumentReturnApprovalComponent,
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        DocumentReturnService
    ]
})
export class DocumentReturnModule {
}
export const DOCUMENT_RETURN_PATH = [
    {
        path: '',
        component: DocumentReturnComponent,
    },
    {
        path: 'approval',
        component: DocumentReturnApprovalComponent,
    }
]
