import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentSearchLendService} from "../../service/document-search-lend.service";
import {DocumentLend} from "../../model/document-lend";
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
    listDocumentForLend: DocumentLend[];

    constructor(private documentSearchLendService: DocumentSearchLendService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentSearchLendService.getListDocumentForLend().subscribe((res) => {
            this.listDocumentForLend = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
    }

    doSearch() {
    }

    doReset() {
    }

}