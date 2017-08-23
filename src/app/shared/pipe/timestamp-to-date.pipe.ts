import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by 15050978 on 8/6/2017.
 */
declare let moment: any;

@Pipe({name: 'timestampToDate'})
export class TimestampToDatePipe implements PipeTransform {

    transform(value: any, dateFormat: any): any {
        if (typeof(value) == "undefined" || !value) return;
        if (!dateFormat) dateFormat = 'DD-MMM-YYYY';
        return moment(value).format(dateFormat);
    }
}