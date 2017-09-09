import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LocalStorageService} from "./local-storage.service";
/**
 * Created by edo on 09/09/2017.
 */
@Injectable()
export class RouterGuardService implements CanActivate {

    constructor(private router:Router, private localStorageService:LocalStorageService) {
    }

    canActivate():boolean {
        if (this.localStorageService.getItem('cu')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}