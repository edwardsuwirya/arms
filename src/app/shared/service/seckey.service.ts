import {Injectable, Inject} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {APP_CONFIG} from "../model/application-properties";
/**
 * Created by 15050978 on 5/9/2017.
 */
@Injectable()
export class SecKeyService {
    seckey: string = '';

    constructor(@Inject(APP_CONFIG) private appConfig, private localStorageService: LocalStorageService) {
    }

    getSecKey(): string {
        this.seckey = this.localStorageService.getItem(this.appConfig.tokenKey);
        return this.seckey;
    }

    setSeckey(key:string) {
        this.localStorageService.setItem(this.appConfig.tokenKey, key);
    }
}
