/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

declare let $: any;
declare let _: any;
@Component({
    selector: 'arms-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit {
    activeUser: string;
    activeRole: string;

    appName: string;
    appVersion: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.activeUser = 'Demo';
        this.activeRole = 'Custody';
        this.appName = 'ARMS';
        this.appVersion = '1.0.0';
    }

    doLogout(){
        this.router.navigate(['/login']);
    }
}
