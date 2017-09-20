import {ResponseStatus} from "./response-status";
/**
 * Created by 15050978 on 5/27/2017.
 */
export class Paging {
    data: any;
    page: number;
    rowPerPage: number;
    totalData: number;
    totalPage: number;
}
export class ResponsePaging {
    responseStatus: ResponseStatus;
    requestId: string;
    paging: Paging;
}