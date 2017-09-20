import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DocumentReturn} from "../../model/document-return";
import {DocumentReturnService} from "../../service/document-return.service";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 06/09/2017.
 */
@Component({
    selector: 'arms-document-return',
    templateUrl: 'document-return.component.html'
})
export class DocumentReturnComponent implements OnInit,AfterViewInit {
    @ViewChild('lendingInfoModal')
    lendingInfoModal: ViewModalComponent;
    @ViewChild('docReturnDate')
    docReturnDate: DatePickerComponent;

    loading: boolean = false;
    listDocumentForReturn: DocumentReturn[];

    doc: DocumentReturn;
    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private documentReturnService: DocumentReturnService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.documentReturnService.getListDocumentForReturn().subscribe((res) => {
            this.listDocumentForReturn = res;
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

    doReturn(doc: DocumentReturn) {
        this.doc = doc;
        this.docReturnDate.setPickerDate();
        this.lendingInfoModal.doShowModal();
    }

    doSave(event) {
        if (event) {
            this.lendingInfoModal.doCloseModal();
        }
    }
}