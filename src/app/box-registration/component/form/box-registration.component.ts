import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {BoxRegistration} from "../../model/box-registration";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
/**
 * Created by 15050978 on 8/23/2017.
 */
declare let _:any;
@Component({
    selector: 'arms-box-registration',
    templateUrl: './box-registration.component.html',
    styleUrls: ['./box-registration.component.css']
})
export class BoxRegistrationComponent implements OnInit,AfterViewInit {
    @ViewChild('startValidDate')
    startValidDate:DatePickerComponent;

    @ViewChild('endValidDate')
    endValidDate:DatePickerComponent;

    boxRegistrationFormGroup:FormGroup;

    listBoxRegistrations:BoxRegistration[];

    constructor(private formBuilder:FormBuilder) {
    }

    ngOnInit():void {
        this.boxRegistrationFormGroup = this.formBuilder.group({
            idBox: ['', Validators.required],
            workingUnit: ['', Validators.required],
            boxDescription: ['', Validators.required],
            boxSize: ['S', Validators.required],
            depositType: ['I', Validators.required],
            depositLocation: ['', Validators.required],
            depositRoom: ['', Validators.required],
            depositShelf: ['', Validators.required],
            startValidDate: ['', Validators.required],
            endValidDate: ['', Validators.required],
        });
    }

    ngAfterViewInit():void {
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
        let formVal = this.boxRegistrationFormGroup.getRawValue();
        console.log(formVal);
        if (!this.listBoxRegistrations) {
            this.listBoxRegistrations = [];
        }
        this.listBoxRegistrations.push(new BoxRegistration(formVal.idBox, formVal.workingUnit, formVal.boxDescription, formVal.boxSize, formVal.depositType, formVal.depositLocation, formVal.depositRoom, formVal.depositShelf, formVal.startValidDate, formVal.endValidDate));
    }

    doReset() {
        this.boxRegistrationFormGroup.reset();
        this.boxRegistrationFormGroup.controls['boxSize'].setValue('S');
        this.boxRegistrationFormGroup.controls['depositType'].setValue('I');
    }

    doView(box:BoxRegistration) {
    }

    doUpdate(box:BoxRegistration) {
    }

    doDelete(box:BoxRegistration) {
        let boxIndex = this.listBoxRegistrations.indexOf(box);
        this.listBoxRegistrations.splice(boxIndex, 1);

    }
}