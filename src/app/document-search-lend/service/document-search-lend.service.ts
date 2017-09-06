import {Injectable} from "@angular/core";
import {DocumentLend} from "../model/document-lend";
import {Observable} from "rxjs";
import {DocumentSearch} from "../model/document-search";
/**
 * Created by 15050978 on 9/5/2017.
 */
@Injectable()
export class DocumentSearchLendService {
    getListDocument() {
        return Observable.of([
            new DocumentSearch('7012707201001', '0001234432', 'Loan-123', 'File Kredit', 'PKS', '0'),
            new DocumentSearch('7012707201002', '0001298376', 'Slip020217', 'Transaksi Harian', 'PKS', '1'),
        ]).delay(900);
    }

    getListDocumentForLend() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(900);
    }

    getListDocumentForLendApproval() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(1200);
    }

    getListDocumentForLendReceive() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(200);
    }

    getListDocumentLendingHistory() {
        return Observable.of([
            new DocumentLend('7012707201001', '0001234432', 'Kami', '12 Jul 2017', '15 Jul 2017', ''),
            new DocumentLend('7012707201002', '0001298376', 'Karno', '12 Jul 2017', '20 Jul 2017', ''),
        ]).delay(400);
    }
}