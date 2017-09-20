/**
 * Created by 15050978 on 8/23/2017.
 */
export class BoxRegistration {
    id: string;
    boxId: string;
    unitId: string;
    boxDescription: string;
    boxSize: string;
    storageType: string;
    storageLocation: string;
    storageSpace: string;
    storageShelf: string;
    startPeriod: string;
    endPeriod: string;
    status: number;

    constructor(boxId: string, unitId: string, boxDescription: string, boxSize: string, storageType: string, storageLocation: string,
                storageSpace: string, storageShelf: string, startPeriod: string, endPeriod: string, status: number) {
        this.boxId = boxId;
        this.unitId = unitId;
        this.boxDescription = boxDescription;
        this.boxSize = boxSize;
        this.storageType = storageType;
        this.storageLocation = storageLocation;
        this.storageSpace = storageSpace;
        this.storageShelf = storageShelf;
        this.startPeriod = startPeriod;
        this.endPeriod = endPeriod;
        this.status = status;
    }
}