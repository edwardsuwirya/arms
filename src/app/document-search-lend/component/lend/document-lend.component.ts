import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentSearch} from "../../model/document-search";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-lend',
    templateUrl: 'document-lend.component.html',
    styleUrls: ['document-lend.component.css']
})
export class DocumentLendComponent implements OnInit,AfterViewInit {
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