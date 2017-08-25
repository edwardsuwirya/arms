import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs";
import {Response, Http, ResponseContentType, RequestOptions} from "@angular/http";
import {APP_CONFIG} from "../model/application-properties";
import {SimpleTokenService} from "./simple-token.service";
/**
 * Created by 15050978 on 5/10/2017.
 */
declare let _: any;

@Injectable()
export class HttpUtilService {
    serviceBaseUrl: string = '';

    constructor(@Inject(APP_CONFIG) private config, private http: Http, private simpleTokenService: SimpleTokenService) {
        this.serviceBaseUrl = config.serviceBaseUrl;
    }

    authGuardHttpService(serviceCode: string): boolean {
        let serviceCodes = this.simpleTokenService.getTokenValue(this.config.tokenService);
        let isServiceExist = _.some(serviceCodes, {'sc': serviceCode});
        return isServiceExist;
    }

    getServiceCodeUrl(serviceCode: string): any {
        let serviceCodes = this.simpleTokenService.getTokenValue(this.config.tokenService);
        if (serviceCodes) {
            let result = _.find(serviceCodes, ['sc', serviceCode]);
            if (result && result.ph) {
                if (result.ph.indexOf('http') == -1) {
                    return this.serviceBaseUrl + '/' + result.ph;
                }
            }
            return result ? result.ph : null;
        } else {
            return null;
        }
    }

    replaceParam(serviceUrlFromCode: string, params: any) {
        if (!params) {
            this.handleError({status: 400, message: 'params not valid'});
        } else {
            for (var keyParam in params) {
                serviceUrlFromCode = serviceUrlFromCode.replace('{' + keyParam + '}', params[keyParam]);
            }
            return serviceUrlFromCode;
        }
    }

    httpUpload(serviceCode: string, formWithUpload: FormData, options?: RequestOptions) {
        if (this.authGuardHttpService(serviceCode)) {
            let serviceUrlFromCode = this.getServiceCodeUrl(serviceCode);
            if (serviceUrlFromCode) {
                return this.http
                    .post(serviceUrlFromCode, formWithUpload, options)
                    .map((resp) => this.extractData(resp))
                    .catch((err) => this.handleError(err));
            } else {
                return this.handleError({status: 404});
            }
        } else {
            return this.handleError({status: 401});
        }
    }

    httpGet(serviceCode: string, queryParameter?: string, params?: any, options?: RequestOptions): Observable<any> {
        if (this.authGuardHttpService(serviceCode)) {
            let serviceUrlFromCode = this.getServiceCodeUrl(serviceCode);
            if (serviceUrlFromCode) {
                if (queryParameter) {
                    serviceUrlFromCode = serviceUrlFromCode + queryParameter;
                }
                if (params) serviceUrlFromCode = this.replaceParam(serviceUrlFromCode, params);
                return this.http.get(serviceUrlFromCode, options)
                    .map((resp) => this.extractData(resp))
                    .catch((err) => this.handleError(err))
            } else {
                return this.handleError({status: 404});
            }
        } else {
            return this.handleError({status: 401});
        }

    }

    httpPost(serviceCode: string, payload: any, params?: any, options?: RequestOptions): Observable<any> {
        if (this.authGuardHttpService(serviceCode)) {
            let serviceUrlFromCode = this.getServiceCodeUrl(serviceCode);
            if (serviceUrlFromCode) {
                if (params) serviceUrlFromCode = this.replaceParam(serviceUrlFromCode, params);
                return this.http.post(serviceUrlFromCode, payload, options)
                    .map((resp) => this.extractData(resp))
                    .catch((err) => this.handleError(err));
            } else {
                return this.handleError({status: 404});
            }
        } else {
            return this.handleError({status: 401});
        }
    }

    httpPrint(serviceCode: string, payload?: any) {
        let options = new RequestOptions({responseType: ResponseContentType.Blob});
        let serviceUrlFromCode = serviceCode;
        if (serviceUrlFromCode) {
            return this.http.post(serviceUrlFromCode, payload, options)
                .map(res => res.blob());
        } else {
            return this.handleError({status: 404});
        }
    }

    extractData(response: Response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        } else {
            let body = response.json();
            if (body && body.responseStatus) {
                if (body.responseStatus.responseCode === '00') {
                    return body || {};
                } else {
                    throw Error(body.responseStatus.responseDesc);
                }
            } else {
                throw Error('Invalid Common Response Format');
            }
        }
    }

    handleError(error: any) {
        let errMsg: string = '';
        let errCode: number;
        if (error.status === 401) {
            errCode = error.status;
            errMsg = this.config.errorDict.error401;
        } else if (error.status === 400) {
            errCode = error.status;
            errMsg = this.config.errorDict.error400;
        } else if (error.status === 403) {
            errCode = error.status;
            errMsg = this.config.errorDict.error403;
        } else if (error.status === 404) {
            errCode = error.status;
            errMsg = this.config.errorDict.error404;
        } else if (error.status === 504) {
            errCode = error.status;
            errMsg = this.config.errorDict.error504;
        } else if (error.status === 500) {
            errCode = error.status;
            errMsg = this.config.errorDict.error500;
        } else if (error) {
            if (error.errCode) {
                errCode = error.errCode;
                errMsg = error.errMsg || '';
            } else {
                errCode = 6;
                errMsg = error || '';
            }
        } else {
            errCode = 666;
            errMsg = 'Unknown error';
        }
        return Observable.throw({errorCode: errCode, errorMessage: errMsg});

    }
}
