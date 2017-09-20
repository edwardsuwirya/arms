import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DocumentSearch} from "../../model/document-search";
import {DocumentSearchLendService} from "../../service/document-search-lend.service";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {DocumentLend} from "../../model/document-lend";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-search',
    templateUrl: 'document-search.component.html'
})
export class DocumentSearchComponent implements OnInit,AfterViewInit {
    @ViewChild('historyModal')
    historyModal: ViewModalComponent;
    @ViewChild('borrowModal')
    borrowModal: ViewModalComponent;

    @ViewChild('docStartDate')
    docStartDate: DatePickerComponent;

    @ViewChild('docEndDate')
    docEndDate: DatePickerComponent;

    documentSearchFormGroup: FormGroup;
    listDocumentSearch: DocumentSearch[];
    loading: boolean = false;

    doc: DocumentSearch;
    listHistoryDocumentLend: DocumentLend[];
    idDocSelected: string;

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private documentSearchLendService: DocumentSearchLendService) {
    }

    ngOnInit(): void {
        this.documentSearchFormGroup = this.formBuilder.group({
            idBox: [''],
            idDoc: [''],
            documentNo: [''],
            documentType: [''],
            workingUnit: ['']
        });
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

    doChooseWorkingUnit() {

    }

    doSearch() {
        this.loading = true;
        this.documentSearchLendService.getListDocument().subscribe((res) => {
            this.listDocumentSearch = res;
            this.loading = false;
        })
    }

    doReset() {
        this.documentSearchFormGroup.reset();
    }

    doBorrow(doc: DocumentSearch) {
        this.doc = doc;
        this.docStartDate.setPickerDate();
        this.docEndDate.setPickerDate();
        this.borrowModal.doShowModal();
    }

    doViewHistory(doc: DocumentSearch) {
        this.loading = true;
        this.idDocSelected = doc.idDocument;
        this.documentSearchLendService.getListDocumentLendingHistory().subscribe((res) => {
            this.listHistoryDocumentLend = res;
            this.loading = false;
            this.historyModal.doShowModal();
        });
    }

    doSave(event) {
        if (event) {
            this.borrowModal.doCloseModal();
        }
    }
}