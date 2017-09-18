import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Menu} from "../model/menu";
import {MenuItem} from "../model/menu-item";
/**
 * Created by edo on 09/09/2017.
 */
@Injectable()
export class ArmsMenuService {
    getUserMenu() {
        return Observable.of([
            new Menu('registration', 'Registrasi', 1,
                [
                    new MenuItem('boxRegistration', 'fa-cubes', 'Registrasi Box', '/boxRegistration'),
                    new MenuItem('documentRegistration', 'fa-tags', 'Registrasi Arsip', '/documentRegistration'),
                    new MenuItem('depositDocumentRegistrationApproval', 'fa-thumbs-o-up', 'Persetujuan Registrasi Arsip', '/documentRegistration/approval'),
                ]),
            new Menu('boxSending', 'Pengiriman Box', 2,
                [
                    new MenuItem('pickupBox', 'fa-hand-lizard-o', 'Permintaan Pick Up Box', '/checkIn'),
                    new MenuItem('checkInApproval', 'fa-thumbs-o-up', 'Persetujuan Pick Up Box', '/checkIn/approval'),
                    new MenuItem('boxSending', 'fa-truck', 'Pengiriman Box', '/checkIn/send'),
                ]),
            new Menu('informationAndDocLending', 'Informasi / Peminjaman Arsip', 3,
                [
                    new MenuItem('documentSearch', 'fa-binoculars', 'Pencarian Arsip', '/documentSearchLend/search'),
                    new MenuItem('documentLending', 'fa-level-up', 'Peminjaman Arsip', '/documentSearchLend/lend'),
                    new MenuItem('documentLendingApproval', 'fa-thumbs-o-up', 'Persetujuan Peminjaman Arsip', '/documentSearchLend/approval'),
                    new MenuItem('documentLendingReceive', 'fa-clone', 'Penerimaan Peminjaman Arsip', '/documentSearchLend/receive'),
                ]),
            new Menu('boxLending', 'Peminjaman Box', 5,
                [
                    new MenuItem('boxLending', 'fa-level-up', 'Peminjaman Box', '/checkOut'),
                    new MenuItem('boxLendingApproval', 'fa-thumbs-o-up', 'Persetujuan Peminjaman Box', '/checkOut/approval'),
                    new MenuItem('boxReceiving', 'fa-cube', 'Penerimaan Box', '/checkOut/receive'),
                ]),
            new Menu('returning', 'Pengembalian', 4,
                [
                    new MenuItem('documentReturning', 'fa-level-down', 'Pengembalian Arsip', '/documentReturn'),
                    new MenuItem('documentReturningApproval', 'fa-thumbs-o-up', 'Persetujuan Pengembalian Arsip', '/documentReturn/approval'),
                    new MenuItem('boxReturn', 'fa-arrow-down', 'Pengembalian Box', '/boxReturn'),
                    new MenuItem('boxReturnApproval', 'fa-thumbs-o-up', 'Persetujuan Pengembalian Box', '/boxReturn/approval'),
                    new MenuItem('peringatanPengembalianDoc', 'fa-clock-o', 'Peringatan Pengembalian Arsip', '/reminder'),
                ]),
            new Menu('boxMaintenance', 'Pengkinian Data Box', 6,
                [
                    new MenuItem('boxMaintenanceRequest', 'fa-list-alt', 'Pengajuan Pengkinian Data Box', '/boxMaintenance/request'),
                    new MenuItem('boxMaintenanceRequestApproval', 'fa-check-square-o', 'Persetujuan Pengajuan Pengkinian Data Box', '/boxMaintenance/requestApproval'),
                    new MenuItem('boxMaintenance', 'fa-edit', 'Pengkinian Data Box', '/boxMaintenance'),
                    new MenuItem('boxMaintenanceApproval', 'fa-thumbs-o-up', 'Persetujuan Pengkinian Data Box', '/boxMaintenance/approval'),
                ])
        ]).delay(800);
    }
}