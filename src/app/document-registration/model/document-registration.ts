/**
 * Created by 15050978 on 8/15/2017.
 */
export class DocumentRegistration {
    idBox: string;
    idDocument: string;
    documentType: string;
    sheetNo: string;
    startPeriod: string;
    endPeriod: string;
    documentNo: string;
    documentName: string;
    description: string;
    keyword: string;
    status: string;
    workingUnit: string;

    constructor(idBox: string, idDocument: string,
                documentType: string, sheetNo: string,
                startPeriod: string, endPeriod: string,
                documentNo: string, documentName: string,
                description: string, keyword: string, status: string,
                workingUnit: string) {
        this.idBox = idBox;
        this.idDocument = idDocument;
        this.documentType = documentType;
        this.sheetNo = sheetNo;
        this.startPeriod = startPeriod;
        this.endPeriod = endPeriod;
        this.documentNo = documentNo;
        this.documentName = documentName;
        this.description = description;
        this.keyword = keyword;
        this.status = status;
        this.workingUnit = workingUnit;
    }
}