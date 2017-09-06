import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentLend} from "../../model/document-lend";
import {DocumentSearchLendService} from "../../service/document-search-lend.service";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-lending-receive',
    templateUrl: 'document-lending-receive.component.html',
    styleUrls: ['document-lending-receive.component.css']
})
export class DocumentLendReceiveComponent implements OnInit,AfterViewInit {
    @ViewChild('docViewModal')
    docViewModal: ViewModalComponent;

    @ViewChild('docReceiveDate')
    docReceiveDate: DatePickerComponent;

    loading: boolean = false;
    listDocumentForLendReceive: DocumentLend[];
    doc: DocumentLend;

    constructor(private documentSearchLendService: DocumentSearchLendService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentSearchLendService.getListDocumentForLendReceive().subscribe((res) => {
            this.listDocumentForLendReceive = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
    }

    doSearch() {
    }

    doReset() {
    }

    doReceive(doc: DocumentLend) {
        this.doc = doc;
        this.docReceiveDate.setPickerDate();
        this.docViewModal.doShowModal();
    }

    doSave(event) {
        if (event) {
            this.docViewModal.doCloseModal();
        }
    }
}