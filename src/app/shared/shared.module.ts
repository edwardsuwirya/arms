import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ModuleContainerComponent} from "./component/module-container/module-container.component";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {GoHomeComponent} from "./component/go-home/go-home.component";
import {TimestampToDatePipe} from "./pipe/timestamp-to-date.pipe";
import {DatePickerComponent} from "./component/date-picker/date-picker.component";
import {AlertComponent} from "./component/alert/alert.component";
import {FormErrorsService} from "./service/form-errors.service";
import {LocalStorageService} from "./service/local-storage.service";
import {I18nService} from "./service/i18n.service";
import {TranslatePipe} from "./pipe/translate.pipe";
import {DateUtilService} from "./service/date-util.service";
import {DateFormatPipe} from "./pipe/date-format.pipe";
import {ViewModalComponent} from "./component/view-modal/view-modal.component";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        ModuleContainerComponent,
        SpinnerComponent,
        GoHomeComponent,
        DatePickerComponent,
        AlertComponent,
        ViewModalComponent,
        TranslatePipe,
        TimestampToDatePipe,
        DateFormatPipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ModuleContainerComponent,
        SpinnerComponent,
        GoHomeComponent,
        DatePickerComponent,
        AlertComponent,
        ViewModalComponent,
        TranslatePipe,
        TimestampToDatePipe,
        DateFormatPipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                LocalStorageService,
                I18nService,
                FormErrorsService,
                DateUtilService
            ]
        };
    }
}
