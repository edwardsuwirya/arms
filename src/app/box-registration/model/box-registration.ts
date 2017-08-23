/**
 * Created by 15050978 on 8/23/2017.
 */
export class BoxRegistration {
    idBox: string;
    workingUnit: string;
    boxDescription: string;
    boxSize: string;
    depositType: string;
    depositLocation: string;
    depositRoom: string;
    depositShelf: string;
    startValidDate: string;
    endValidDate: string;

    constructor(idBox: string, workingUnit: string, boxDescription: string, boxSize: string, depositType: string, depositLocation: string,
                depositRoom: string, depositShelf: string, startValidDate: string, endValidDate: string) {
        this.idBox = idBox;
        this.workingUnit = workingUnit;
        this.boxDescription = boxDescription;
        this.boxSize = boxSize;
        this.depositType = depositType;
        this.depositLocation = depositLocation;
        this.depositRoom = depositRoom;
        this.depositShelf = depositShelf;
        this.startValidDate = startValidDate;
        this.endValidDate = endValidDate;
    }
}