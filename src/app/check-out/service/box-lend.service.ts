import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BoxLend} from "../model/box-lend";
/**
 * Created by edo on 06/09/2017.
 */
@Injectable()
export class BoxLendService {
    getListBoxForLendApproval() {
        return Observable.of([
            new BoxLend('7012707201001', '1 Jun 2017', '31 Dec 2017', 'PT. Pura'),
            new BoxLend('7012707201002', '2 Jul 2017', '20 Nov 2017', 'PT. Angkasa'),
        ]).delay(1800);
    }

    getListBoxForLendReceive() {
        return Observable.of([
            new BoxLend('7012707201001', '1 Jun 2017', '31 Dec 2017', 'PT. Pura'),
            new BoxLend('7012707201002', '2 Jul 2017', '20 Nov 2017', 'PT. Angkasa'),
        ]).delay(1105);
    }
}