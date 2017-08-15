import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ModalDocumentRegistrationComponent} from "../modal-document-registration/modal-document-registration.component";
import {ArmsDocument} from "../../model/arms-document";
/**
 * Created by 15050978 on 8/15/2017.
 */
@Component({
    selector: 'arms-document-registration',
    templateUrl: './document-registration.component.html',
    styleUrls: ['./document-registration.component.css']
})
export class DocumentRegistrationComponent implements OnInit,AfterViewInit {
    @ViewChild('modalDocReg')
    modalDocumentRegistration: ModalDocumentRegistrationComponent;

    armsDocuments: ArmsDocument[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    onAddDocumentRegistration() {
        this.modalDocumentRegistration.show();
    }

    onUpdateNewRegistration(event: ArmsDocument) {
        console.log(event);
        this.armsDocuments.push(event);
    }
}