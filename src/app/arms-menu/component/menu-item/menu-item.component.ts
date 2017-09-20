import {OnInit, Component, AfterViewInit, Input} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-menu-item',
    templateUrl: 'menu-item.component.html'
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

    @Input()
    tabNo: number;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doClick() {
        this.router.navigate(['/home' + this.direction], {
            queryParams: {
                menuId: this.id,
                menuTab: this.tabNo,
                icon: this.icon
            }
        });
    }
}