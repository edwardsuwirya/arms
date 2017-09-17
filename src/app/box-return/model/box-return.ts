/**
 * Created by edo on 17/09/2017.
 */
export class BoxReturn {
    idBox:string;
    startDate:string;
    endDate:string;
    vendor:string;

    constructor(idBox:string, startDate:string, endDate:string, vendor:string) {
        this.idBox = idBox;
        this.startDate = startDate;
        this.endDate = endDate;
        this.vendor = vendor;
    }
}