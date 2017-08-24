import {PipeTransform, Pipe} from "@angular/core";
import {I18nService} from "../service/i18n.service";
/**
 * Created by edo on 03/02/2017.
 */
@Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    constructor(private i18n: I18nService) {
    }

    transform(value: any, args: any): any {
        var required = '';
        // handle form label required (*), coz javascript array handle asterisk as a wildcard //
        // src\app\shared\service\i18n.service.ts //
        if (value.indexOf('*') !== -1 && value.trim().indexOf(' ') == -1) {
            required = '*';
            value = value.replace('*', '');
        } else if (value.trim().indexOf(' ') !== -1) {
            return value;
        }
        if (!value) return;
        return this.i18n.translate(value) + required;
    }
}
