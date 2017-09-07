/**
 * Created by 15050978 on 9/7/2017.
 */
export class BoxDetailMaintenance {
    idBox: string;
    idDoc: string;
    documentNo: string;
    documentType: string;
    sheetNo: string;
    startPeriod: string;
    endPeriod: string;
    status: string;

    constructor(idBox: string, idDoc: string, documentNo: string, documentType: string,
                sheetNo: string, startPeriod: string, endPeriod: string, status: string) {
        this.idBox = idBox;
        this.idDoc = idDoc;
        this.documentNo = documentNo;
        this.documentType = documentType;
        this.sheetNo = sheetNo;
        this.startPeriod = startPeriod;
        this.endPeriod = endPeriod;
        this.status = status;
    }
}