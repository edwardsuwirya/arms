import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by 15050978 on 8/24/2017.
 */
declare let moment: any;

@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {

    transform(value: any, dateFormat: any): any {
        if (!value) return;
        if (!dateFormat) dateFormat = 'DD MMM YYYY';
        return moment(value, 'YYYY-MM-DD').format(dateFormat);
    }
}