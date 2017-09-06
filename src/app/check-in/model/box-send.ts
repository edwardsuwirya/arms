/**
 * Created by 15050978 on 9/6/2017.
 */
export class BoxSend {
    idBox: string;
    startDate: string;
    endDate: string;
    vendor: string;

    constructor(idBox: string, startDate: string, endDate: string, vendor: string) {
        this.idBox = idBox;
        this.startDate = startDate;
        this.endDate = endDate;
        this.vendor = vendor;
    }
}