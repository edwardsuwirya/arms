/**
 * Created by 15050978 on 5/9/2017.
 */
import {Injectable, Inject} from "@angular/core";
import {SecKeyService} from "./seckey.service";
import {LocalStorageService} from "./local-storage.service";
import {APP_CONFIG} from "../model/application-properties";

declare let jwt: any;
@Injectable()
export class SimpleTokenService {

    constructor(@Inject(APP_CONFIG) private appConfig,
                private localStorageService: LocalStorageService,
                private secKeyService: SecKeyService) {
    }

    encodeToken(payload: any): string {
        return jwt.encode(payload, this.secKeyService.getSecKey());
    }

    private decodeToken(token: string): any {
        return jwt.decode(token, this.secKeyService.getSecKey());
    }

    getTokenValue(key: string): string {
        let token = this.localStorageService.getItem(this.appConfig.lsAuthKey);
        let tokenBody = this.decodeToken(token);
        return tokenBody[key];
    }
}
