import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ModuleContainerComponent} from "./component/module-container/module-container.component";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {GoHomeComponent} from "./component/go-home/go-home.component";
/**
 * Created by edo on 06/05/2017.
 */
@NgModule({
    declarations: [
        ModuleContainerComponent,
        SpinnerComponent,
        GoHomeComponent
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
        GoHomeComponent
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
