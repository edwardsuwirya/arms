import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {DocumentSearch} from "../../model/document-search";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-lend-approval',
    templateUrl: 'document-lend-approval.component.html',
    styleUrls: ['document-lend-approval.component.css']
})
export class DocumentLendApprovalComponent implements OnInit,AfterViewInit {
    @ViewChild('boxViewModal')
    boxViewModal: ViewModalComponent;
    @ViewChild('lendingInfoModal')
    lendingInfoModal: ViewModalComponent;

    loading: boolean = false;
    listDocumentSearch: DocumentSearch[];

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doSearch() {
    }

    doReset() {
    }

}