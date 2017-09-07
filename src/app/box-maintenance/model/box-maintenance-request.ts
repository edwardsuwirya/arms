/**
 * Created by 15050978 on 9/7/2017.
 */
export class BoxMaintenanceRequest {
    idBox: string;
    idDoc: string;
    documentNo: string;
    documentType: string;
    workingUnit: string;
    documentLocation: string;

    constructor(idBox: string, idDoc: string, documentNo: string, documentType: string, workingUnit: string, documentLocation: string) {
        this.idBox = idBox;
        this.idDoc = idDoc;
        this.documentNo = documentNo;
        this.documentType = documentType;
        this.workingUnit = workingUnit;
        this.documentLocation = documentLocation;
    }
}