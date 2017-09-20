import {Injectable, Inject} from "@angular/core";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {Observable} from "rxjs/Rx";
import {SecKeyService} from "../../shared/service/seckey.service";
import {APP_CONFIG} from "../../shared/model/application-properties";
import {SimpleTokenService} from "../../shared/service/simple-token.service";
/**
 * Created by edo on 09/09/2017.
 */
@Injectable()
export class LoginService {
    serviceList: [{}] = [
        {
            "sc": "ADD_BOX_REGISTRATION",
            "ph": "boxRegistration/addBoxRegistration"
        },
        {
            "sc": "GET_LIST_BOX_REGISTRATION_PAGING",
            "ph": "boxRegistration/getListBoxRegistrationPaging"
        }
    ];

    constructor(@Inject(APP_CONFIG) private appConfig,
                private localStorageService: LocalStorageService,
                private seckeyService: SecKeyService,
                private simpleTokenService: SimpleTokenService) {
    }

    doUserLogin(userName: string, userPwd: string): Observable<boolean> {
        return Observable.create((obs) => {
            if (userName === 'arms01' && userPwd === 'P@ssw0rd') {
                this.seckeyService.setSeckey();
                let token = this.simpleTokenService.encodeToken({'username': userName, 'role': 'Custody','service':this.serviceList});
                this.localStorageService.setItem(this.appConfig.lsAuthKey, token);
                this.localStorageService.setItem(this.appConfig.prefLang, 'ID');
                // this.localStorageService.setItem(this.appConfig.tokenAppName, res[this.appConfig.tokenAppName]);
                // this.localStorageService.setItem(this.appConfig.tokenAppVersion, res[this.appConfig.tokenAppVersion]);

                obs.next(true);
            } else {
                obs.next(false);
            }

        }).delay(1500);

    }
}