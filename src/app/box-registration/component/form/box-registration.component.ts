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
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 8/23/2017.
 */
@Component({
    selector: 'arms-box-registration',
    templateUrl: './box-registration.component.html'
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

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder,
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
            depositType: ['Internal', Validators.required],
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
        this.loading = true;
        this.boxRegistrationService.getListBoxRegistrationPaging().subscribe((res) => {
            if (res && res.paging) {
                this.listBoxRegistrations = res.paging.data;
            }
            this.loading = false;
        }, (err) => {
            console.log(err);
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
        this.startValidDate.setPickerDate();
        this.endValidDate.setPickerDate();
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();

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
            formVal.startValidDate, formVal.endValidDate, 0);

        if (this.boxRegistrationFormGroup.invalid) {
            this.loading = false;
            this.errorInfo = this.formErrorsService.doTranslateError(this.boxRegistrationFormGroup);
            this.alertError.doShowModal();
        } else {
            if (this.dateUtilService.compareBetweenDates(formVal.startValidDate, formVal.endValidDate) == false) {
                if (this.isUpdatingForm) {
                    this.boxRegistrationService.updateBox(newBox).subscribe((b) => {
                        this.doReset();
                        this.loading = false;
                    }, (err) => {
                        this.loading = false;
                    });
                } else {
                    this.boxRegistrationService.addNewBox(newBox).subscribe((b) => {
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
        this.boxRegistrationFormGroup.reset();
        this.boxRegistrationFormGroup.controls['boxSize'].setValue('S');
        this.boxRegistrationFormGroup.controls['depositType'].setValue('Internal');
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
        this.boxRegistrationFormGroup.controls['idBox'].setValue(box.boxId);
        this.boxRegistrationFormGroup.controls['workingUnit'].setValue(box.unitId);
        this.boxRegistrationFormGroup.controls['boxDescription'].setValue(box.boxDescription);
        this.boxRegistrationFormGroup.controls['boxSize'].setValue(box.boxSize);
        this.boxRegistrationFormGroup.controls['depositType'].setValue(box.storageType);
        this.boxRegistrationFormGroup.controls['depositLocation'].setValue(box.storageLocation);
        this.boxRegistrationFormGroup.controls['depositRoom'].setValue(box.storageSpace);
        this.boxRegistrationFormGroup.controls['depositShelf'].setValue(box.storageShelf);
        this.boxRegistrationFormGroup.controls['startValidDate'].setValue(box.startPeriod);
        this.boxRegistrationFormGroup.controls['endValidDate'].setValue(box.endPeriod);
        this.startValidDate.setPickerDate(box.startPeriod);
        this.endValidDate.setPickerDate(box.endPeriod);
    }

    doDelete(box: BoxRegistration) {
        this.loading = true;
        this.boxRegistrationService.deleteBox(box).subscribe((b) => {
            this.loading = false;
        }, (err) => {
            this.loading = false;
        })
    }

    doChooseLocation() {
        this.boxRegistrationFormGroup.controls['depositLocation'].setValue('Jakarta');
    }
}