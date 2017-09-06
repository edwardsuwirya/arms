import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentRegistrationService} from "../../service/document-registration.service";
import {DocumentApproval} from "../../model/document-approval";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-document-registration-approval',
    templateUrl: './document-registration-approval.component.html',
    styleUrls: ['./document-registration-approval.component.css']
})
export class DocumentRegistrationApprovalComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;

    listDocumentApproval: DocumentApproval[];
    armsDocApproval: DocumentApproval;

    loading: boolean = false;

    constructor(private documentRegistrationService: DocumentRegistrationService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentRegistrationService.getListDocumentRegistrationForApproval().subscribe((res) => {
            this.listDocumentApproval = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {

    }

    doApprove(doc: DocumentApproval) {
        this.armsDocApproval = doc;
        this.viewModal.doShowModal();
    }

    doSave(event) {
        if (event) {
            this.viewModal.doCloseModal();
        }
    }
}