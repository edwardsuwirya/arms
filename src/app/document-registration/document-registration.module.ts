import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {DocumentRegistrationComponent} from "./component/form/document-registration.component";
import {ModalDocumentRegistrationComponent} from "./component/modal-document-registration/modal-document-registration.component";
/**
 * Created by 15050978 on 8/15/2017.
 */
@NgModule({
    declarations: [
        DocumentRegistrationComponent,
        ModalDocumentRegistrationComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        DocumentRegistrationComponent,
        ModalDocumentRegistrationComponent
    ],
    providers: []
})
export class DocumentRegistrationModule {
}
export const DOCUMENT_REGISTRATION_PATH = [
    {
        path: '',
        component: DocumentRegistrationComponent,
    },
]
