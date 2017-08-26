import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {AlertComponent} from "../../../shared/component/alert/alert.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MessageInfo} from "../../../shared/model/message-info";
import {FormErrorsService} from "../../../shared/service/form-errors.service";
import {DateUtilService} from "../../../shared/service/date-util.service";
import {DocumentRegistration} from "../../model/document-registration";
import {DocumentRegistrationService} from "../../service/document-registration.service";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 8/15/2017.
 */

@Component({
    selector: 'arms-document-registration',
    templateUrl: './document-registration.component.html',
    styleUrls: ['./document-registration.component.css']
})
export class DocumentRegistrationComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal:ViewModalComponent;

    @ViewChild('alertError')
    alertError:AlertComponent;

    @ViewChild('startValidDate')
    startValidDate:DatePickerComponent;

    @ViewChild('endValidDate')
    endValidDate:DatePickerComponent;

    @ViewChild('file')
    fileInput:ElementRef;

    documentRegistrationFormGroup:FormGroup;

    listDocumentRegistrations:DocumentRegistration[];

    loading:boolean = false;

    errorInfo:MessageInfo[] = [];

    isDailyTransaction:boolean = false;
    isUpdatingForm:boolean = false;
    armsDocument:DocumentRegistration;

    fileInfo:any;

    constructor(private formBuilder:FormBuilder,
                private documentRegistrationService:DocumentRegistrationService,
                private formErrorsService:FormErrorsService,
                private dateUtilService:DateUtilService) {
    }

    ngOnInit():void {
        this.documentRegistrationFormGroup = this.formBuilder.group({
            idBox: [''],
            idDocument: [''],
            documentType: ['', Validators.required],
            sheetNo: [''],
            startValidDate: [''],
            endValidDate: [''],
            documentNo: ['', Validators.required],
            documentName: ['', Validators.required],
            description: ['', Validators.required],
            keyword: ['', Validators.required],
            fileUpload: ['', Validators.required],
            status: [''],
            workingUnit: ['7012']
        });

        this.documentRegistrationFormGroup.valueChanges.subscribe((res) => {
            if (res.documentType == 'th') {
                this.isDailyTransaction = true;
                this.documentRegistrationFormGroup.controls['sheetNo'].setValidators(Validators.required);
                this.documentRegistrationFormGroup.controls['startValidDate'].setValidators(Validators.required);
                this.documentRegistrationFormGroup.controls['endValidDate'].setValidators(Validators.required);

                Observable.timer(300).do(() => {
                    this.startValidDate.setPickerDate(this.documentRegistrationFormGroup.controls['startValidDate'].value);
                    this.endValidDate.setPickerDate(this.documentRegistrationFormGroup.controls['endValidDate'].value);
                }).subscribe();

            } else {
                this.isDailyTransaction = false;
                this.documentRegistrationFormGroup.controls['sheetNo'].clearValidators();
                this.documentRegistrationFormGroup.controls['startValidDate'].clearValidators();
                this.documentRegistrationFormGroup.controls['endValidDate'].clearValidators();
            }
        })
    }

    ngAfterViewInit():void {

    }

    onFileChange(event) {
        this.fileInfo = event.srcElement.files[0];
        if (this.fileInfo && this.fileInfo.size <= 512000) {
            this.documentRegistrationFormGroup.controls['fileUpload'].setValue(this.fileInfo.name);
        } else {
            this.documentRegistrationFormGroup.controls['fileUpload'].setValue('');
            this.errorInfo = [new MessageInfo('exceededSize', 'overlimitSize')];
            this.alertError.doShowModal();
        }
    }

    doGetStartDate(event) {
        this.documentRegistrationFormGroup.controls['startValidDate'].setValue(event);
    }

    doGetEndDate(event) {
        this.documentRegistrationFormGroup.controls['endValidDate'].setValue(event);
    }

    doSave() {
        this.loading = true;
        let formVal = this.documentRegistrationFormGroup.getRawValue();
        console.log(formVal);

        let newBox:DocumentRegistration = new DocumentRegistration(formVal.idBox,
            formVal.idDocument,
            formVal.documentType,
            formVal.sheetNo,
            formVal.startValidDate,
            formVal.endValidDate,
            formVal.documentNo,
            formVal.documentName,
            formVal.description, formVal.keyword,
            '',
            formVal.workingUnit);

        if (this.documentRegistrationFormGroup.invalid) {
            this.loading = false;
            this.errorInfo = this.formErrorsService.doTranslateError(this.documentRegistrationFormGroup);
            this.alertError.doShowModal();
        } else {
            if (this.dateUtilService.compareBetweenDates(formVal.startValidDate, formVal.endValidDate) == false) {
                if (this.isUpdatingForm) {
                    this.documentRegistrationService.updateDocument(newBox, this.fileInfo).subscribe((b) => {
                        this.doSpliceBox(this.armsDocument);
                        if (!this.listDocumentRegistrations) {
                            this.listDocumentRegistrations = [];
                        }
                        this.listDocumentRegistrations.push(b);
                        this.doReset();
                        this.loading = false;
                    }, (err) => {
                        this.loading = false;
                    });
                } else {
                    this.documentRegistrationService.addNewDocument(newBox, this.fileInfo).subscribe((b) => {
                        if (!this.listDocumentRegistrations) {
                            this.listDocumentRegistrations = [];
                        }
                        this.listDocumentRegistrations.push(b);
                        this.doReset();
                        this.loading = false;
                    }, (err) => {
                        this.loading = false;
                    })
                }
            } else {
                this.loading = false;
                this.errorInfo = [new MessageInfo('invalidPeriod', 'advanceStartDate')];
                this.alertError.doShowModal();
            }
        }
    }

    doReset() {
        this.documentRegistrationFormGroup.reset();
        this.fileInput.nativeElement.value = '';
        this.documentRegistrationFormGroup.controls['workingUnit'].setValue('7012');
        if (this.startValidDate) {
            this.startValidDate.clear();
        }
        if (this.endValidDate) {
            this.endValidDate.clear();
        }
        this.isUpdatingForm = false;
    }

    doView(armsDocument:DocumentRegistration) {
        this.armsDocument = armsDocument;
        this.viewModal.doShowModal();
    }

    doUpdate(armsDocument:DocumentRegistration) {
        this.armsDocument = armsDocument;
        this.isUpdatingForm = true;
        this.documentRegistrationFormGroup.controls['idBox'].setValue(armsDocument.idBox);
        this.documentRegistrationFormGroup.controls['idDocument'].setValue(armsDocument.workingUnit);
        this.documentRegistrationFormGroup.controls['documentType'].setValue(armsDocument.documentType);
        this.documentRegistrationFormGroup.controls['sheetNo'].setValue(armsDocument.sheetNo);
        this.documentRegistrationFormGroup.controls['startValidDate'].setValue(armsDocument.startPeriod);
        this.documentRegistrationFormGroup.controls['endValidDate'].setValue(armsDocument.endPeriod);
        this.documentRegistrationFormGroup.controls['documentNo'].setValue(armsDocument.documentNo);
        this.documentRegistrationFormGroup.controls['documentName'].setValue(armsDocument.documentName);
        this.documentRegistrationFormGroup.controls['description'].setValue(armsDocument.description);
        this.documentRegistrationFormGroup.controls['keyword'].setValue(armsDocument.keyword);
        this.documentRegistrationFormGroup.controls['workingUnit'].setValue(armsDocument.workingUnit);
    }

    doSpliceBox(armsDocument:DocumentRegistration) {
        let boxIndex = this.listDocumentRegistrations.indexOf(armsDocument);
        this.listDocumentRegistrations.splice(boxIndex, 1);
    }

    doDelete(box:DocumentRegistration) {
        this.loading = true;
        this.documentRegistrationService.deleteDocument(box).subscribe((b) => {
            this.doSpliceBox(b);
            this.loading = false;
        }, (err) => {
            this.loading = false;
        })
    }

    doChooseBox() {
        this.documentRegistrationFormGroup.controls['idBox'].setValue('20170820001');
    }
}