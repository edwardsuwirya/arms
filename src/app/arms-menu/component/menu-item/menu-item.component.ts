import {OnInit, Component, AfterViewInit, Input, EventEmitter, Output} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-menu-item',
    templateUrl: 'menu-item.component.html',
    styleUrls: ['menu-item.component.css']
})
export class ArmsMenuItemComponent implements OnInit,AfterViewInit {
    @Input()
    id: string = '';

    @Input()
    title: string = '';

    @Input()
    icon: string = 'fa-info';

    @Input()
    direction: string = '';

    @Input()
    activeMenu: string = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doClick() {
        this.router.navigateByUrl('/home' + this.direction);
    }
}