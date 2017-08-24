import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {BoxRegistration} from "../../model/box-registration";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BoxRegistrationService} from "../../service/box-registration.service";
import {AlertComponent} from "../../../shared/component/alert/alert.component";
import {FormErrorsService} from "../../../shared/service/form-errors.service";
import {MessageInfo} from "../../../shared/model/message-info";
import {DateUtilService} from "../../../shared/service/date-util.service";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
/**
 * Created by 15050978 on 8/23/2017.
 */
@Component({
    selector: 'arms-box-registration',
    templateUrl: './box-registration.component.html',
    styleUrls: ['./box-registration.component.css']
})
export class BoxRegistrationComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;

    @ViewChild('alertError')
    alertError: AlertComponent;

    @ViewChild('startValidDate')
    startValidDate: DatePickerComponent;

    @ViewChild('endValidDate')
    endValidDate: DatePickerComponent;

    boxRegistrationFormGroup: FormGroup;

    listBoxRegistrations: BoxRegistration[];

    loading: boolean = false;

    errorInfo: MessageInfo[] = [];

    isVendorLocationNeeded: boolean = false;
    isUpdatingForm: boolean = false;
    box: BoxRegistration;

    constructor(private formBuilder: FormBuilder,
                private boxRegistrationService: BoxRegistrationService,
                private formErrorsService: FormErrorsService,
                private dateUtilService: DateUtilService) {
    }

    ngOnInit(): void {
        this.boxRegistrationFormGroup = this.formBuilder.group({
            idBox: [''],
            workingUnit: ['7012'],
            boxDescription: ['', Validators.required],
            boxSize: ['S', Validators.required],
            depositType: ['I', Validators.required],
            depositLocation: [''],
            depositRoom: ['', Validators.required],
            depositShelf: ['', Validators.required],
            startValidDate: ['', Validators.required],
            endValidDate: ['', Validators.required],
        });

        this.boxRegistrationFormGroup.valueChanges.subscribe((res) => {
            if (res.depositType == 'V') {
                this.isVendorLocationNeeded = true;
                this.boxRegistrationFormGroup.controls['depositLocation'].setValidators(Validators.required);
            } else {
                this.isVendorLocationNeeded = false;
                this.boxRegistrationFormGroup.controls['depositLocation'].clearValidators();
            }
        })
    }

    ngAfterViewInit(): void {
        this.startValidDate.setPickerDate();
        this.endValidDate.setPickerDate();
    }

    doGetStartDate(event) {
        this.boxRegistrationFormGroup.controls['startValidDate'].setValue(event);
    }

    doGetEndDate(event) {
        this.boxRegistrationFormGroup.controls['endValidDate'].setValue(event);
    }

    doSave() {
        this.loading = true;
        let formVal = this.boxRegistrationFormGroup.getRawValue();
        console.log(formVal);

        let newBox: BoxRegistration = new BoxRegistration(formVal.idBox,
            formVal.workingUnit,
            formVal.boxDescription,
            formVal.boxSize,
            formVal.depositType,
            formVal.depositLocation,
            formVal.depositRoom,
            formVal.depositShelf,
            formVal.startValidDate, formVal.endValidDate);

        if (this.boxRegistrationFormGroup.invalid) {
            this.loading = false;
            this.errorInfo = this.formErrorsService.doTranslateError(this.boxRegistrationFormGroup);
            this.alertError.doShowModal();
        } else {
            if (this.dateUtilService.compareBetweenDates(formVal.startValidDate, formVal.endValidDate) == false) {
                this.boxRegistrationService.addNewBox(newBox).subscribe((b) => {
                    if (!this.listBoxRegistrations) {
                        this.listBoxRegistrations = [];
                    }
                    if (this.isUpdatingForm) {
                        this.doDelete(this.box);
                    }
                    this.listBoxRegistrations.push(b);
                    this.doReset();
                    this.loading = false;
                })
            } else {
                this.loading = false;
                this.errorInfo = [new MessageInfo('invalidPeriod', 'advanceStartDate')];
                this.alertError.doShowModal();
            }
        }
    }

    doReset() {
        this.boxRegistrationFormGroup.reset();
        this.boxRegistrationFormGroup.controls['boxSize'].setValue('S');
        this.boxRegistrationFormGroup.controls['depositType'].setValue('I');
        this.startValidDate.clear();
        this.endValidDate.clear();
        this.isUpdatingForm = false;
    }

    doView(box: BoxRegistration) {
        this.box = box;
        this.viewModal.doShowModal();
    }

    doUpdate(box: BoxRegistration) {
        this.box = box;
        this.isUpdatingForm = true;
        this.boxRegistrationFormGroup.controls['idBox'].setValue(box.idBox);
        this.boxRegistrationFormGroup.controls['workingUnit'].setValue(box.workingUnit);
        this.boxRegistrationFormGroup.controls['boxDescription'].setValue(box.boxDescription);
        this.boxRegistrationFormGroup.controls['boxSize'].setValue(box.boxSize);
        this.boxRegistrationFormGroup.controls['depositType'].setValue(box.depositType);
        this.boxRegistrationFormGroup.controls['depositLocation'].setValue(box.depositLocation);
        this.boxRegistrationFormGroup.controls['depositRoom'].setValue(box.depositRoom);
        this.boxRegistrationFormGroup.controls['depositShelf'].setValue(box.depositShelf);
        this.boxRegistrationFormGroup.controls['startValidDate'].setValue(box.startValidDate);
        this.boxRegistrationFormGroup.controls['endValidDate'].setValue(box.endValidDate);
        this.startValidDate.setPickerDate(box.startValidDate);
        this.endValidDate.setPickerDate(box.endValidDate);
    }

    doDelete(box: BoxRegistration) {
        let boxIndex = this.listBoxRegistrations.indexOf(box);
        this.listBoxRegistrations.splice(boxIndex, 1);
    }
}