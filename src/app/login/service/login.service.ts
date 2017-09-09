import {Injectable} from "@angular/core";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {Observable} from "rxjs/Rx";
/**
 * Created by edo on 09/09/2017.
 */
@Injectable()
export class LoginService {
    constructor(private localStorageService:LocalStorageService) {
    }

    doUserLogin(userName:string, userPwd:string):Observable<boolean> {
        return Observable.create((obs)=> {
            if (userName === 'arms01' && userPwd === 'P@ssw0rd') {
                this.localStorageService.setItem('cu', 'STI');
                obs.next(true);
            } else {
                obs.next(false);
            }

        })

    }
}