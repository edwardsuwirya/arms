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
            new Menu('registrasi', 'Registrasi', 1,
                [
                    new MenuItem('registrasiBox', 'fa-cubes', 'Registrasi Box', '/boxRegistration'),
                    new MenuItem('registrasiArsip', 'fa-tags', 'Registrasi Arsip', '/documentRegistration'),
                    new MenuItem('persetujuanRegistrasiArsip', 'fa-thumbs-o-up', 'Persetujuan Registrasi Arsip', '/documentRegistration/approval'),
                ]),
            new Menu('pengirimanBox', 'Pengiriman Box', 2,
                [
                    new MenuItem('pickupBox', 'fa-hand-lizard-o', 'Permintaan Pick Up Box', '/checkIn'),
                    new MenuItem('persetujuanPickupBox', 'fa-thumbs-o-up', 'Persetujuan Pick Up Box', '/checkIn/approval'),
                    new MenuItem('pengirimanBox', 'fa-truck', 'Pengiriman Box', '/checkIn/send'),
                ]),
            new Menu('informasiPeminjamanArsip', 'Informasi / Peminjaman Arsip', 3,
                [
                    new MenuItem('pencarianArsip', 'fa-binoculars', 'Pencarian Arsip', '/documentSearchLend/search'),
                    new MenuItem('peminjamanArsip', 'fa-level-up', 'Peminjaman Arsip', '/documentSearchLend/lend'),
                    new MenuItem('persetujuanPeminjamanArsip', 'fa-thumbs-o-up', 'Persetujuan Peminjaman Arsip', '/documentSearchLend/approval'),
                    new MenuItem('penerimaanPeminjamanArsip', 'fa-clone', 'Penerimaan Peminjaman Arsip', '/documentSearchLend/receive'),
                ]),
            new Menu('peminjamanBox', 'Peminjaman Box', 5,
                [
                    new MenuItem('peminjamanBox', 'fa-level-up', 'Peminjaman Box', '/checkOut'),
                    new MenuItem('persetujuanPeminjamanBox', 'fa-thumbs-o-up', 'Persetujuan Peminjaman Box', '/checkOut/approval'),
                    new MenuItem('penerimaanBox', 'fa-cube', 'Penerimaan Box', '/checkOut/receive'),
                ]),
            new Menu('pengembalian', 'Pengembalian', 4,
                [
                    new MenuItem('pengembalianArsip', 'fa-level-down', 'Pengembalian Arsip', '/documentReturn'),
                    new MenuItem('persetujuanPengembalianArsip', 'fa-thumbs-o-up', 'Persetujuan Pengembalian Arsip', '/documentReturn/approval'),
                    new MenuItem('pengembalianBox', 'fa-arrow-down', 'Pengembalian Box', '/documentReturn'),
                    new MenuItem('persetujuanPengembalianBox', 'fa-thumbs-o-up', 'Persetujuan Pengembalian Box', '/documentReturn/approval'),
                    new MenuItem('peringatanPengembalianDoc', 'fa-clock-o', 'Peringatan Pengembalian Arsip', '/reminder'),
                ]),
            new Menu('pengkinianDataBox', 'Pengkinian Data Box', 6,
                [
                    new MenuItem('pengajuanPengkinianDataBox', 'fa-list-alt', 'Pengajuan Pengkinian Data Box', '/documentReturn'),
                    new MenuItem('persetujuanPengajuanPengkinianDataBox', 'fa-check-square-o', 'Persetujuan Pengajuan Pengkinian Data Box', '/boxMaintenance/requestApproval'),
                    new MenuItem('pengkinianDataBox', 'fa-edit', 'Pengkinian Data Box', '/boxMaintenance'),
                    new MenuItem('persetujuanPengkinianDataBox', 'fa-thumbs-o-up', 'Persetujuan Pengkinian Data Box', '/boxMaintenance/approval'),
                ])
        ]).delay(800);
    }
}