import {Injectable} from "@angular/core";
/**
 * Created by 15050978 on 8/24/2017.
 */
declare let moment: any;
@Injectable()
export class DateUtilService {
    compareBetweenDates(startDate: string, endDate: string,
                        startDateFormat: string = 'YYYY-MM-DD', endDateFormat: string = 'YYYY-MM-DD',
                        compareType: string = 'isAfter'): boolean {
        let sDate = moment(startDate, startDateFormat);
        let eDate = moment(endDate, endDateFormat);
        let result: boolean = null;
        switch (compareType) {
            case 'isAfter': {
                result = sDate.isAfter(eDate);
                break;
            }
            case 'isBefore': {
                result = sDate.isBefore(eDate);
                break;
            }
            case 'isSame': {
                result = sDate.isSame(eDate);
                break;
            }
        }
        return result;
    }

    formatDate(date: string, newDateFormat: string = 'DD MMM YYYY', oldDateFormat: 'YYYY-MM-DD'): string {
        return moment(date, oldDateFormat).format(newDateFormat);
    }
}