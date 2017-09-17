import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BoxReturn} from "../model/box-return";
/**
 * Created by 15050978 on 9/5/2017.
 */
@Injectable()
export class BoxReturnService {
    getListBoxForReturnApproval() {
        return Observable.of([
            new BoxReturn('7012707201001', '1 Jun 2017', '31 Dec 2017', 'PT. Pura'),
            new BoxReturn('7012707201002', '2 Jul 2017', '20 Nov 2017', 'PT. Angkasa'),
        ]).delay(1800);
    }
}