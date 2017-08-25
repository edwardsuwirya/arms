/**
 * Created by edo on 06/05/2017.
 */
import {InjectionToken} from "@angular/core";

export const APP_CONFIG = new InjectionToken("app.config");

const SERVICE_BASE_URL: string = process.env.API_URL;

const LANG_US = {
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
    'noDataFound': 'No Data Found',
    'save': 'Save',
    'reset': 'Reset',
    'choose': 'Choose',
    'small': 'Small',
    'medium': 'Medium',
    'large': 'Large',
    'internal': 'Internal',
    'vendor': 'Vendor',
    'required': 'Required',
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
    'attachment': 'Attachment'
};

const LANG_ID = {
    'documentNo': 'Nomor Dokumen',
    'documentName': 'Nama Dokumen',
    'depositDocumentRegistration': 'Registrasi Dokumen',
    'depositBoxRegistration': 'Registrasi Box',
    'invalidRegistration': 'Kesalahan Registrasi',
    'exceededSize': 'Kesalahan Ukuran',
    'infoRegistration': 'Informasi Registrasi',
    'invalidPeriod': 'Kesalahan periode',
    'advanceStartDate': 'Tanggal mulai setelah tanggal akhir',
    'overlimitSize': 'Ukuran file terlalu besar',
    'noDataFound': 'Data tidak ditemukan',
    'save': 'Simpan',
    'reset': 'Batal',
    'choose': 'Pilih',
    'small': 'Kecil',
    'medium': 'Sedang',
    'large': 'Besar',
    'internal': 'Internal',
    'vendor': 'Vendor',
    'required': 'Dibutuhkan',
    'idBox': 'ID Box',
    'idDoc': 'ID Dokumen',
    'fileUpload': 'File Lampiran',
    'workingUnit': 'Unit kerja',
    'boxDescription': 'Deskripsi box',
    'depositLocation': 'Lokasi box',
    'depositType': 'Tipe Penyimpanan',
    'depositRoom': 'Ruang penyimpanan box',
    'depositShelf': 'Rak penyimpanan box',
    'startValidDate': 'Tanggal mulai periode berlaku',
    'endValidDate': 'Tanggal akhir periode berlaku',
    'documentType': 'Tipe Dokumen',
    'sheetNo': 'Jumlah Lembar',
    'description': 'Deskripsi',
    'keyword': 'Kata Kunci',
    'attachment': 'Lampiran'
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
