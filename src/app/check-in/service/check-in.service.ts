import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BoxSend} from "../model/box-send";
/**
 * Created by 15050978 on 9/6/2017.
 */
@Injectable()
export class CheckInService {
    getListBoxForSend() {
        return Observable.of([
            new BoxSend('7012707201001', '1 Jun 2017', '31 Dec 2017', 'PT. Pura'),
            new BoxSend('7012707201002', '2 Jul 2017', '20 Nov 2017', 'PT. Angkasa'),
        ]).delay(1200);
    }

    getListBoxForSendApproval() {
        return Observable.of([
            new BoxSend('7012707201001', '1 Jun 2017', '31 Dec 2017', 'PT. Pura'),
            new BoxSend('7012707201002', '2 Jul 2017', '20 Nov 2017', 'PT. Angkasa'),
        ]).delay(1800);
    }
}