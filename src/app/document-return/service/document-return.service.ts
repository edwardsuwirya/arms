import {Injectable} from "@angular/core";
import {DocumentReturn} from "../model/document-return";
import {Observable} from "rxjs/Rx";
/**
 * Created by edo on 06/09/2017.
 */
@Injectable()
export class DocumentReturnService {
    getListDocumentForReturn() {
        return Observable.of([
            new DocumentReturn('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentReturn('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(900);
    }

    getListDocumentForReturnApproval() {
        return Observable.of([
            new DocumentReturn('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentReturn('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(1200);
    }
}