import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-menu',
    templateUrl: 'arms-menu.component.html',
    styleUrls: ['arms-menu.component.css']
})
export class ArmsMenuComponent implements OnInit,AfterViewInit {
    @Input()
    isWelcome: boolean = false;

    @Input()
    isTabOpen: number = 1;

    @Input()
    activeMenu: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }
}