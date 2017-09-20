import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentReturn} from "../../model/document-return";
import {DocumentReturnService} from "../../service/document-return.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 06/09/2017.
 */
@Component({
    selector: 'arms-document-return-approval',
    templateUrl: 'document-return-approval.component.html'
})
export class DocumentReturnApprovalComponent implements OnInit,AfterViewInit {
    @ViewChild('lendingInfoModal')
    lendingInfoModal: ViewModalComponent;

    loading: boolean = false;
    listDocumentReturnForApproval: DocumentReturn[];

    doc: DocumentReturn;

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private documentReturnService: DocumentReturnService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentReturnService.getListDocumentForReturnApproval().subscribe((res) => {
            this.listDocumentReturnForApproval = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }

    doSearch() {
    }

    doReset() {
    }


}