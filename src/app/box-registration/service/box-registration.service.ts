import {Injectable} from "@angular/core";
import {BoxRegistration} from "../model/box-registration";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 8/24/2017.
 */

@Injectable()
export class BoxRegistrationService {
    addNewBox(box: BoxRegistration) {
        return Observable.of(box).delay(2500);
    }

    updateBox(box: BoxRegistration) {
        return Observable.of(box).delay(2700);
    }

    deleteBox(box: BoxRegistration) {
        return Observable.of(box).delay(2900);
    }
}