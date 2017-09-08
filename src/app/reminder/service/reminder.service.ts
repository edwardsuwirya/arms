import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DocumentLend} from "../../document-search-lend/model/document-lend";
/**
 * Created by 15050978 on 9/8/2017.
 */
@Injectable()
export class ReminderService {
    getListReminderH0() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(900);
    }

    getListReminderH1() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
            new DocumentLend('7012707201012', '0021248276', 'Frans', '2 Jul 2017', '20 Dec 2017', ''),
        ]).delay(900);
    }

    getListReminderHAny() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0003678376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
            new DocumentLend('7012707201002', '0005908373', 'Budi', '4 Jul 2017', '20 Jul 2017', ''),
            new DocumentLend('7012707201002', '0000018321', 'Jono', '21 Mar 2017', '22 Mar 2017', ''),
            new DocumentLend('7012707201002', '0001564300', 'Irfan', '8 Feb 2017', '15 Deb 2017', ''),
            new DocumentLend('7012707201002', '0002008344', 'Agus', '3 Aug 2017', '4 Aug 2017', ''),
        ]).delay(900);
    }

}