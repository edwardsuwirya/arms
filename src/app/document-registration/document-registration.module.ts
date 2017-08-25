import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {DocumentRegistrationComponent} from "./component/form/document-registration.component";
import {DocumentRegistrationService} from "./service/document-registration.service";
/**
 * Created by 15050978 on 8/15/2017.
 */
@NgModule({
    declarations: [
        DocumentRegistrationComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        DocumentRegistrationComponent,
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
]
