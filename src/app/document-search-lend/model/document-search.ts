/**
 * Created by 15050978 on 9/5/2017.
 */
export class DocumentSearch {
    idBox: string;
    idDocument: string;
    documentNo: string;
    documentType: string;
    workingUnit: string;
    lendingStatus: string;

    constructor(idBox: string, idDocument: string, documentNo: string, documentType: string, workingUnit: string, lendingStatus: string) {
        this.idBox = idBox;
        this.idDocument = idDocument;
        this.documentNo = documentNo;
        this.documentType = documentType;
        this.workingUnit = workingUnit;
        this.lendingStatus = lendingStatus;
    }
}