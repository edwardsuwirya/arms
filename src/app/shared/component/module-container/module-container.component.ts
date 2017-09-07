/**
 * Created by 15050978 on 5/17/2017.
 */
/**
 * Created by edo on 07/05/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: 'arms-module-container',
    templateUrl: './module-container.component.html',
    styleUrls: ['./module-container.component.css']
})
export class ModuleContainerComponent {
    @Input()
    showSideBar: boolean = true;
}
