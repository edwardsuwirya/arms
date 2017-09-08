/**
 * Created by 15050978 on 9/8/2017.
 */
export class Reminder {
    idBox: string;
    idDoc: string;
    borrowerName: string;
    borrowStartDate: string;
    borrowEndDate: string;
    reason: string;

    constructor(idBox: string, idDoc: string, borrowerName: string, borrowStartDate: string, borrowEndDate: string, reason: string) {
        this.idBox = idBox;
        this.idDoc = idDoc;
        this.borrowerName = borrowerName;
        this.borrowStartDate = borrowStartDate;
        this.borrowEndDate = borrowEndDate;
        this.reason = reason;
    }
}