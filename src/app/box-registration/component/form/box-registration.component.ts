import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {BoxRegistration} from "../../model/box-registration";
/**
 * Created by 15050978 on 8/23/2017.
 */
@Component({
    selector: 'arms-box-registration',
    templateUrl: './box-registration.component.html',
    styleUrls: ['./box-registration.component.css']
})
export class BoxRegistrationComponent implements OnInit,AfterViewInit {
    @ViewChild('startValidDate')
    startValidDate: DatePickerComponent;

    @ViewChild('endValidDate')
    endValidDate: DatePickerComponent;

    listBoxRegistrations: BoxRegistration[] = [
        new BoxRegistration('123', 'Cab. Jakarta Pusat', 'Keterangan', 'Kecil', 'Internal', 'Jakarta', '1', '2', '10 Aug 2017', '11 Aug 2018')
    ];

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.startValidDate.setPickerDate(null);
        this.endValidDate.setPickerDate(null);
    }

}