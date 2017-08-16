import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ModalDocumentRegistrationComponent} from "../modal-document-registration/modal-document-registration.component";
import {ArmsDocument} from "../../model/arms-document";
import {Router} from "@angular/router";
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

    constructor(private router:Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    onAddDocumentRegistration() {
        this.modalDocumentRegistration.show();
    }

    onCancelDocumentRegistration() {
        this.router.navigateByUrl('/home');
    }

    onUpdateNewRegistration(event: ArmsDocument) {
        console.log(event);
        this.armsDocuments.push(event);
    }
}