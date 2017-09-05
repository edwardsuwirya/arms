/**
 * Created by edo on 05/09/2017.
 */
export class DocumentApproval {
    idBox:string;
    documentType:string;
    depositLocation:string;
    sheetNo:string;
    workingUnit:string;

    constructor(idBox:string, documentType:string,
                depositLocation:string, sheetNo:string,workingUnit:string) {
        this.idBox = idBox;
        this.documentType = documentType;
        this.depositLocation = depositLocation;
        this.sheetNo = sheetNo;
        this.workingUnit = workingUnit;
    }
}