import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DocumentSearch} from "../../model/document-search";
/**
 * Created by edo on 28/08/2017.
 */
@Component({
    selector: 'arms-document-search',
    templateUrl: 'document-search.component.html',
    styleUrls: ['document-search.component.css']
})
export class DocumentSearchComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;
    @ViewChild('borrowModal')
    borrowModal: ViewModalComponent;

    documentSearchFormGroup: FormGroup;
    listDocumentSearch: DocumentSearch[];
    loading: boolean = false;


    constructor(private formBuilder: FormBuilder,) {
    }

    ngOnInit(): void {
        this.documentSearchFormGroup = this.formBuilder.group({
            idDoc: [''],
            documentNo: [''],
            documentName: [''],
            description: [''],
            keyword: [''],
            workingUnit: ['']
        })
    }

    ngAfterViewInit(): void {
    }

    doSearch() {
    }

    doReset() {
        this.documentSearchFormGroup.reset();
    }

}