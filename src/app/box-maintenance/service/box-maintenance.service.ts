import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BoxMaintenanceRequest} from "../model/box-maintenance-request";
import {BoxDetailMaintenance} from "../model/box-detail-maintenance";
/**
 * Created by 15050978 on 9/5/2017.
 */
@Injectable()
export class BoxMaintenanceService {
    getListBoxForMaintenanceRequest() {
        return Observable.of([
            new BoxMaintenanceRequest('100873990', '5100-123-11', 'Loan-20098', 'File Kredit', '001921', 'Internal'),
            new BoxMaintenanceRequest('400872902', '5100-245-11', 'Slip-020217', 'Transaksi Harian', '001921', 'Eksternal'),
            new BoxMaintenanceRequest('505903993', '5100-220-12', 'Loan-12009', 'File Kredit', '001921', 'Internal'),
        ]).delay(600);
    }

    getListBoxMaintenanceRequestForApproval() {
        return Observable.of([
            new BoxMaintenanceRequest('400872902', '5100-245-11', 'Slip-020217', 'Transaksi Harian', '001921', 'Eksternal'),
        ]).delay(840);
    }

    getListBoxDetailForMaintenance() {
        return Observable.of([
            new BoxDetailMaintenance('7012120982001', '5100-245-11', 'Slip-020217', 'Transaksi Harian', '7', '01 Mei 2017', '30 Mei 2017', ''),
            new BoxDetailMaintenance('7012120982002', '5100-220-12', 'Loan-12009', 'File Kredit', '2', '01 Jun 2017', '30 Jun 2017', ''),
        ]).delay(1125);
    }

    getListBoxMaintenanceForApproval() {
        return Observable.of([
            new BoxMaintenanceRequest('400872902', '5100-245-11', 'Slip-020217', 'Transaksi Harian', '001921', 'Internal'),
            new BoxMaintenanceRequest('505903993', '5100-220-12', 'Loan-12009', 'File Kredit', '001921', 'Eksternal'),
        ]).delay(1125);
    }
}