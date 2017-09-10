import {Injectable, Inject} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LocalStorageService} from "./local-storage.service";
import {APP_CONFIG} from "../model/application-properties";
import {SimpleTokenService} from "./simple-token.service";
/**
 * Created by edo on 09/09/2017.
 */
@Injectable()
export class RouterGuardService implements CanActivate {

    constructor(@Inject(APP_CONFIG) private appConfig,
                private router:Router,
                private localStorageService:LocalStorageService,
                private simpleTokenService:SimpleTokenService) {
    }

    canActivate():boolean {
        if (this.localStorageService.getItem(this.appConfig.tokenKey) &&
            this.simpleTokenService.getTokenValue('username')
        ) {
            this.localStorageService.setItem(this.appConfig.tokenUserName, this.simpleTokenService.getTokenValue('username'));
            this.localStorageService.setItem(this.appConfig.tokenUserRole, this.simpleTokenService.getTokenValue('role'));
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}