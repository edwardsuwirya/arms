import {ResponseStatus} from "./response-status";
/**
 * Created by 15050978 on 5/27/2017.
 */
export class Response {
    responseStatus: ResponseStatus;
    requestId: string;
    data: any;
}