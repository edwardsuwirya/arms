import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DocumentRegistration} from "../model/document-registration";
/**
 * Created by 15050978 on 8/24/2017.
 */

@Injectable()
export class DocumentRegistrationService {
    addNewDocument(armsDoc: DocumentRegistration, fileInfo?: any) {
        let input = new FormData();
        input.append('idBox', armsDoc.idBox);
        input.append('idDocument', armsDoc.idDocument);
        input.append('documentType', armsDoc.documentType);
        input.append('sheetNo', armsDoc.sheetNo);
        input.append('startPeriod', armsDoc.startPeriod);
        input.append('endPeriod', armsDoc.endPeriod);
        input.append('documentNo', armsDoc.documentNo);
        input.append('documentName', armsDoc.documentName);
        input.append('description', armsDoc.description);
        input.append('keyword', armsDoc.keyword);
        input.append('workingUnit', armsDoc.workingUnit);
        input.append('file', fileInfo);
        // return this.http.post("/api/uploadFile", input);
        return Observable.of(armsDoc).delay(2500);
    }

    updateDocument(armsDoc: DocumentRegistration, fileInfo?: any) {
        let input = new FormData();
        input.append('idBox', armsDoc.idBox);
        input.append('idDocument', armsDoc.idDocument);
        input.append('documentType', armsDoc.documentType);
        input.append('sheetNo', armsDoc.sheetNo);
        input.append('startPeriod', armsDoc.startPeriod);
        input.append('endPeriod', armsDoc.endPeriod);
        input.append('documentNo', armsDoc.documentNo);
        input.append('documentName', armsDoc.documentName);
        input.append('description', armsDoc.description);
        input.append('keyword', armsDoc.keyword);
        input.append('workingUnit', armsDoc.workingUnit);
        input.append('file', fileInfo);
        return Observable.of(armsDoc).delay(2700);
    }

    deleteDocument(armsDoc: DocumentRegistration) {
        return Observable.of(armsDoc).delay(2900);
    }
}