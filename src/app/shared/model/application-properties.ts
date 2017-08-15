/**
 * Created by edo on 06/05/2017.
 */
import {InjectionToken} from "@angular/core";

export const APP_CONFIG = new InjectionToken("app.config");

const SERVICE_BASE_URL: string = process.env.API_URL;

const LANG_US = {

};

const LANG_ID = {

};

const ERROR_DICT = {
    'error400': 'Bad Request',
    'error401': 'Unauthorized',
    'error403': 'Forbidden',
    'error404': 'Page Not Found',
    'error504': 'Getway Timeout',
    'error500': 'Server Error'
}

const MENU_CODE = {

}

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
        'US': LANG_US
    },
    'errorDict': ERROR_DICT,
};
