/**
 * Created by 15050978 on 5/17/2017.
 */
/**
 * Created by edo on 07/05/2017.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'arms-module-container',
    template: `<div class="moduleContainer">
                <div class="container">
                   <ng-content></ng-content>
                </div>
                </div>`,
    styles: [`.moduleContainer{
                padding: 10px 10px 30px 10px;
               }
    `]
})
export class ModuleContainerComponent {

}
