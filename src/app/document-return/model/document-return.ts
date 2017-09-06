/**
 * Created by edo on 06/09/2017.
 */
export class DocumentReturn {
    idBox:string;
    idDoc:string;
    borrowerName:string;
    borrowStartDate:string;
    borrowEndDate:string;
    reason:string;

    constructor(idBox:string, idDoc:string, borrowerName:string, borrowStartDate:string, borrowEndDate:string, reason:string) {
        this.idBox = idBox;
        this.idDoc = idDoc;
        this.borrowerName = borrowerName;
        this.borrowStartDate = borrowStartDate;
        this.borrowEndDate = borrowEndDate;
        this.reason = reason;
    }
}