import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {DocumentSearchComponent} from "./component/search/document-search.component";
import {ArmsMenuModule} from "../arms-menu/arms-menu.module";
import {DocumentSearchLendService} from "./service/document-search-lend.service";
import {DocumentLendComponent} from "./component/lend/document-lend.component";
import {DocumentLendApprovalComponent} from "./component/approval/document-lend-approval.component";
import {DocumentLendReceiveComponent} from "./component/lending-receive/document-lending-receive.component";
/**
 * Created by 15050978 on 8/15/2017.
 */
@NgModule({
    declarations: [
        DocumentLendComponent,
        DocumentLendApprovalComponent,
        DocumentSearchComponent,
        DocumentLendReceiveComponent
    ],
    imports: [
        SharedModule,
        ArmsMenuModule
    ],
    exports: [],
    providers: [
        DocumentSearchLendService
    ]
})
export class DocumentSearchLendModule {
}
export const DOCUMENT_SEARCH_LEND_PATH = [
    {
        path: 'lend',
        component: DocumentLendComponent,
    },
    {
        path: 'approval',
        component: DocumentLendApprovalComponent,
    },
    {
        path: 'search',
        component: DocumentSearchComponent,
    },
    {
        path: 'receive',
        component: DocumentLendReceiveComponent,
    },

]
