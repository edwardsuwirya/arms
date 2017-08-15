import {Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from "@angular/core";
import {ArmsDocument} from "../../model/arms-document";
/**
 * Created by 15050978 on 8/15/2017.
 */
declare let $: any;

@Component({
    selector: 'arms-modal-document-registration',
    templateUrl: './modal-document-registration.component.html',
    styleUrls: ['./modal-document-registration.component.css']
})
export class ModalDocumentRegistrationComponent implements OnInit,AfterViewInit {
    @Input()
    id: string = 'modal';

    @Output()
    newRegistration: EventEmitter<ArmsDocument> = new EventEmitter();

    docId: string;
    docNo: string;
    docName: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    show() {
        $('#' + this.id).modal('show');
    }

    onAddDocumentRegistration() {
        let doc: ArmsDocument = new ArmsDocument();
        doc.registrationNo = this.docId;
        doc.documentNo = this.docNo;
        doc.documentName = this.docName;
        this.newRegistration.emit(doc);
    }

}