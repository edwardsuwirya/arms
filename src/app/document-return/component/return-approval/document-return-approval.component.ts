import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentReturn} from "../../model/document-return";
import {DocumentReturnService} from "../../service/document-return.service";
/**
 * Created by edo on 06/09/2017.
 */
@Component({
    selector: 'arms-document-return-approval',
    templateUrl: 'document-return-approval.component.html',
    styleUrls: ['document-return-approval.component.css']
})
export class DocumentReturnApprovalComponent implements OnInit,AfterViewInit {
    @ViewChild('lendingInfoModal')
    lendingInfoModal:ViewModalComponent;

    loading:boolean = false;
    listDocumentReturnForApproval:DocumentReturn[];

    doc:DocumentReturn;

    constructor(private documentReturnService:DocumentReturnService) {
    }

    ngOnInit():void {
        this.loading = true;
        this.documentReturnService.getListDocumentForReturnApproval().subscribe((res) => {
            this.listDocumentReturnForApproval = res;
            this.loading = false;
        })
    }

    ngAfterViewInit():void {
    }

    doSearch() {
    }

    doReset() {
    }


}