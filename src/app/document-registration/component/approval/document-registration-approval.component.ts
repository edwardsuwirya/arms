import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {DocumentRegistration} from "../../model/document-registration";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
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
    viewModal:ViewModalComponent;

    listDocumentRegistrations:DocumentRegistration[];
    armsDocument:DocumentRegistration;

    ngOnInit():void {

    }

    ngAfterViewInit():void {

    }

    doView(armsDocument:DocumentRegistration) {
        this.armsDocument = armsDocument;
        this.viewModal.doShowModal();
    }
}