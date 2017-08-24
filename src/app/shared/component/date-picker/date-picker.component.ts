import {Component, AfterViewInit, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {TimestampToDatePipe} from "../../pipe/timestamp-to-date.pipe";
/**
 * Created by 15050978 on 6/21/2017.
 */
declare let Pikaday: any;

@Component({
    selector: 'arms-datepicker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit,AfterViewInit {
    @Input()
    id: string = 'datePicker';

    @Input()
    mandatoryFlag: string = '';

    @Input()
    format: string = 'DD-MMM-YYYY';

    @Input()
    isDisabled: boolean;

    @Output()
    selectedDate: EventEmitter<string> = new EventEmitter();

    picker: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // this.setPickerDate('');
    }

    clear() {
        this.picker.setDate(null);
    }

    setPickerDate(newDate: string = '') {
        let that = this;
        if (this.picker) {
            this.picker.destroy();
        }
        if (newDate) {
            let n = new TimestampToDatePipe().transform(newDate, 'YYYY-MM-DD');
            this.picker = new Pikaday({
                field: document.getElementById(this.id),
                defaultDate: new Date(n),
                setDefaultDate: true,
                format: that.format,
                onSelect: function () {
                    that.selectedDate.emit(this.getMoment().format('YYYY-MM-DD'));
                }
            });
        } else {
            this.picker = new Pikaday({
                field: document.getElementById(this.id),
                format: that.format,
                onSelect: function () {
                    that.selectedDate.emit(this.getMoment().format('YYYY-MM-DD'));
                }
            });
        }


    }

}