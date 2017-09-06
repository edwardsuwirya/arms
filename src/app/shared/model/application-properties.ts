/**
 * Created by edo on 06/05/2017.
 */
import {InjectionToken} from "@angular/core";

export const APP_CONFIG = new InjectionToken("app.config");

const SERVICE_BASE_URL:string = process.env.API_URL;

const LANG_US = {
    'lending': 'Lending',
    'viewLendingHistory': 'Lending History',
    'boxSending': 'Box Sending ',
    'boxLending': 'Box Lending ',
    'documentReturning': 'Document Return',
    'documentReturningApproval': 'Document Return Approval',
    'documentLending': 'Document Lending',
    'documentLendingReceive': 'Document Lending Receive',
    'documentLendingApproval': 'Document Lending Approval',
    'boxLendingApproval': 'Approval Lending Box',
    'boxReceiving': 'Receiving Box',
    'documentSearch': 'Document Search',
    'borrowRegistration': 'Borrow Document Registration',
    'checkInApproval': 'Approval Pickup Box',
    'depositDocumentRegistrationApproval': 'Approval Document Registration',
    'browse': 'browse',
    'documentNo': 'Document No',
    'documentName': 'Document Name',
    'depositDocumentRegistration': 'Document Registration',
    'depositBoxRegistration': 'Box Registration',
    'invalidRegistration': 'Invalid Registration',
    'exceededSize': 'Invalid Size',
    'infoRegistration': 'Info Registration',
    'invalidPeriod': 'Invalid Period',
    'advanceStartDate': 'Start date is after end date',
    'overlimitSize': 'File size is overlimit',
    'spvSend': 'Send To Supervisor',
    'noDataFound': 'No Data Found',
    'view': 'View',
    'update': 'Update',
    'delete': 'Delete',
    'search': 'search',
    'save': 'Save',
    'reset': 'Reset',
    'close': 'Close',
    'choose': 'Choose',
    'small': 'Small',
    'medium': 'Medium',
    'large': 'Large',
    'internal': 'Internal',
    'vendor': 'Vendor',
    'required': 'Required',
    'receive': 'Receive',
    'return': 'Return',
    'idBox': 'Box ID',
    'fileUpload': 'File Attachment',
    'idDoc': 'Document ID',
    'workingUnit': 'Working Unit',
    'boxDescription': 'Box Description',
    'depositLocation': 'Box Location',
    'depositType': 'Deposit Type',
    'depositRoom': 'Box Deposit Room',
    'depositShelf': 'Box Deposit Shelf',
    'startValidDate': 'Start Valid Date',
    'endValidDate': 'End Valid Date',
    'documentType': 'Document Type',
    'sheetNo': 'Total Sheets',
    'description': 'Description',
    'keyword': 'Keyword',
    'attachment': 'Attachment',
    'viewDetailBox': 'View box detail',
    'deleteBox': 'Delete a box',
    'updateBox': 'Update box information',
    'viewDetailDoc': 'View document detail',
    'deleteDoc': 'delete a document',
    'updateDoc': 'update document information',
    'send': 'Send',
    'approval': 'Approval',
    'approve': 'Approve',
    'reject': 'Reject',
    'reason': 'Reason'
};

const LANG_ID = {
    'lending': 'Peminjaman',
    'viewLendingHistory': 'Histori Peminjaman',
    'boxSending': 'Pengiriman Box',
    'boxLending': 'Peminjaman Box',
    'documentReturning': 'Pengembalian Arsip',
    'documentReturningApproval': 'Persetujuan Pengembalian Arsip',
    'documentLending': 'Peminjaman Arsip',
    'documentLendingApproval': 'Persetujuan Peminjaman Arsip',
    'documentLendingReceive': 'Penerimaan Peminjaman Arsip',
    'boxLendingApproval': 'Persetujuan Peminjaman Box',
    'boxReceiving': 'Penerimaan Box',
    'documentSearch': 'Pencarian Arsip',
    'borrowRegistration': 'Peminjaman Arsip',
    'checkInApproval': 'Persetujuan Pickup Box',
    'depositDocumentRegistrationApproval': 'Persetujuan Registrasi Arsip',
    'browse': 'Jelajah File',
    'documentNo': 'Nomor Arsip',
    'documentName': 'Nama Arsip',
    'depositDocumentRegistration': 'Registrasi Arsip',
    'depositBoxRegistration': 'Registrasi Box',
    'invalidRegistration': 'Kesalahan Registrasi',
    'exceededSize': 'Kesalahan Ukuran',
    'infoRegistration': 'Informasi Registrasi',
    'invalidPeriod': 'Kesalahan periode',
    'advanceStartDate': 'Tanggal mulai setelah tanggal akhir',
    'overlimitSize': 'Ukuran file terlalu besar',
    'spvSend': 'Kirim Ke Supervisor',
    'noDataFound': 'Data tidak ditemukan',
    'view': 'Lihat',
    'update': 'Ubah',
    'delete': 'Hapus',
    'search': 'Cari',
    'save': 'Simpan',
    'reset': 'Batal',
    'close': 'Tutup',
    'choose': 'Pilih',
    'small': 'Kecil',
    'medium': 'Sedang',
    'large': 'Besar',
    'internal': 'Internal',
    'vendor': 'Vendor',
    'required': 'Dibutuhkan',
    'receive': 'Diterima',
    'return': 'Dikembalikan',
    'idBox': 'ID Box',
    'idDoc': 'ID Arsip',
    'fileUpload': 'File Lampiran',
    'workingUnit': 'Unit kerja',
    'boxDescription': 'Deskripsi box',
    'depositLocation': 'Lokasi box',
    'depositType': 'Tipe Penyimpanan',
    'depositRoom': 'Ruang penyimpanan box',
    'depositShelf': 'Rak penyimpanan box',
    'startValidDate': 'Tanggal mulai periode berlaku',
    'endValidDate': 'Tanggal akhir periode berlaku',
    'documentType': 'Tipe Arsip',
    'sheetNo': 'Jumlah Lembar',
    'description': 'Deskripsi',
    'keyword': 'Kata Kunci',
    'attachment': 'Lampiran',
    'viewDetailBox': 'Lihat informasi box',
    'deleteBox': 'Hapus box',
    'updateBox': 'Pembaruan informasi box',
    'viewDetailDoc': 'Lihat informasi arsip',
    'deleteDoc': 'Hapus dokumen',
    'updateDoc': 'Pembaruan informasi arsip',
    'send': 'Kirim',
    'approval': 'Persetujuan',
    'approve': 'Disetujui',
    'reject': 'Ditolak',
    'reason': 'Alasan'
};

const ERROR_DICT = {
    'error400': 'Bad Request',
    'error401': 'Unauthorized',
    'error403': 'Forbidden',
    'error404': 'Page Not Found',
    'error504': 'Getway Timeout',
    'error500': 'Server Error'
}

const MENU_CODE = {}

export const appConfig = {
    'serviceBaseUrl': SERVICE_BASE_URL,
    'lsAuthKey': 'av',
    'tokenUserName': 'un',
    'tokenMenuUser': 'mn',
    'tokenUserRole': 'rl',
    'tokenKey': 'sk',
    'tokenService': 'sv',
    'tokenBranchCode': 'bc',
    'tokenAppName': 'ap',
    'tokenAppVersion': 'vr',
    'prefLang': 'pl',
    'addAction': 'add',
    'updateAction': 'update',
    'menuCode': MENU_CODE,
    'dictionary': {
        'ID': LANG_ID,
        'EN': LANG_US
    },
    'errorDict': ERROR_DICT,
};
