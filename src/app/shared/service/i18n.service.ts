import {Injectable, Inject} from "@angular/core";
import {APP_CONFIG} from "../model/application-properties";
import {LocalStorageService} from "./local-storage.service";
/**
 * Created by edo on 03/02/2017.
 */
@Injectable()
export class I18nService {
    constructor(@Inject(APP_CONFIG) private config, private localStorageService: LocalStorageService) {
    }

    translate(key: string, dynamicVal?: any) {
        let translation = key;
        let currentLang = this.localStorageService.getItem('pl');
        if (!currentLang) {
            currentLang = 'ID';
        }
        if (this.config.dictionary[currentLang]) {
            let result = this.config.dictionary[currentLang][key];
            /**
             * Agar bisa menyisipkan dynamic value di tengah text
             * Usage:
             *   'TrxApproval':'Transaction with ref Number: {refNum} has been {status}'
             *   this.i18n.translate('TrxApproval',{refNum:'001',status:'Approved/Rejected'})
             */
            if (dynamicVal) {
                for (var k in dynamicVal) {
                    result = result.replace('{' + k + '}', dynamicVal[k]);
                }
            }
            /**
             * return = key if result not found
             */
            if (!result) {
                result = key;
            }
            return result;
        }
        return translation;
    }
}
