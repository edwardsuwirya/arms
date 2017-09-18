import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentLend} from "../../model/document-lend";
import {DocumentSearchLendService} from "../../service/document-search-lend.service";
import {ActivatedRoute} from "@angular/router";
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
    listDocumentForLendApproval: DocumentLend[];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private documentSearchLendService: DocumentSearchLendService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentSearchLendService.getListDocumentForLendApproval().subscribe((res) => {
            this.listDocumentForLendApproval = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
        this.route.queryParams.subscribe(params => {
            this.icon = params['icon'];
            this.menuId = params['menuId'];
            this.menuTab = Number(params['menuTab']);
        });
    }

    doSearch() {
    }

    doReset() {
    }

}