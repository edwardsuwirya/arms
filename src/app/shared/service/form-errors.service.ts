/**
 * Created by 15050978 on 8/24/2017.
 */
import {Injectable} from "@angular/core";
import {FormGroup, ValidationErrors} from "@angular/forms";
import {MessageInfo} from "../model/message-info";
@Injectable()
export class FormErrorsService {
    constructor() {
    }

    doTranslateError(form: FormGroup): MessageInfo[] {
        let errors: MessageInfo[] = [];
        Object.keys(form.controls).forEach((key) => {
            let controlErrors: ValidationErrors = form.get(key).errors;
            if (controlErrors) {
                Object.keys(controlErrors).forEach(keyError => {
                    errors.push(new MessageInfo(key, keyError));
                });
            }
        });
        return errors;
    }
}