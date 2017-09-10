import {Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from "@angular/core";
import {ArmsMenuService} from "../../service/arms-menu.service";
import {Menu} from "../../model/menu";
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
    isWelcome:boolean = false;

    @Input()
    isTabOpen:number = 1;

    @Input()
    activeMenu:string = '';

    menus:Menu[];
    menuLoading:boolean = false;

    constructor(private armsMenuService:ArmsMenuService) {
    }

    ngOnInit():void {
        this.menuLoading = true;
        this.armsMenuService.getUserMenu().subscribe((menus)=> {
            this.menus = menus;
            this.menuLoading = false;
        })
    }

    ngAfterViewInit():void {
    }
}