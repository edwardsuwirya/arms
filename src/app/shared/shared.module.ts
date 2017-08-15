import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ModuleContainerComponent} from "./component/module-container/module-container.component";
import {SpinnerComponent} from "./component/spinner/spinner.component";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        ModuleContainerComponent,
        SpinnerComponent
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
        SpinnerComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
