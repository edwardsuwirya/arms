/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/service/local-storage.service";

declare let $:any;
declare let _:any;
@Component({
    selector: 'arms-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit {
    activeUser:string;
    activeRole:string;

    appName:string;
    appVersion:string;

    constructor(private router:Router, private localStorageService:LocalStorageService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.activeUser = 'Demo';
        this.activeRole = 'Custody';
        this.appName = 'ARMS';
        this.appVersion = '1.0.0';
    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['/login']);
    }
}
