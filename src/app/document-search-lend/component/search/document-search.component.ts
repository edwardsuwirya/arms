import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DocumentSearch} from "../../model/document-search";
import {DocumentSearchLendService} from "../../service/document-search-lend.service";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {DocumentLend} from "../../model/document-lend";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-search',
    templateUrl: 'document-search.component.html',
    styleUrls: ['document-search.component.css']
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

    constructor(private formBuilder: FormBuilder, private documentSearchLendService: DocumentSearchLendService) {
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