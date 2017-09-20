import {Injectable, Inject} from "@angular/core";
import {BoxRegistration} from "../model/box-registration";
import {Observable} from "rxjs";
import {ResponsePaging} from "../../shared/model/response-paging";
import {HttpUtilService} from "../../shared/service/http-util.service";
import {APP_CONFIG} from "../../shared/model/application-properties";
/**
 * Created by 15050978 on 8/24/2017.
 */

@Injectable()
export class BoxRegistrationService {
    constructor(@Inject(APP_CONFIG) private appConfig,protected httpService: HttpUtilService) {
    }

    addNewBox(box: BoxRegistration) {
        return this.httpService.httpPost(this.appConfig.serviceList.addBoxRegistration, box);
    }

    getListBoxRegistrationPaging(pageSize: string = '10', pageNo: string = '0', sortDir: string = '1', sortBy: string = 'code', searchCriteria: string = '', searchValue: string = ''): Observable<ResponsePaging> {
        return this.httpService.httpGet(this.appConfig.serviceList.getListBoxRegistrationPaging,
            '?pageSize=' + pageSize +
            '&pageNo=' + pageNo +
            '&sortDir=' + sortDir +
            '&sort=' + sortBy +
            '&field=' + searchCriteria +
            '&value=' + searchValue);
    }

    updateBox(box: BoxRegistration) {
        return Observable.of(box).delay(2700);
    }

    deleteBox(box: BoxRegistration) {
        return Observable.of(box).delay(2900);
    }
}