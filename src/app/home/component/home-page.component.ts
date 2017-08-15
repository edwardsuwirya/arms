/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, AfterViewInit} from "@angular/core";

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

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.activeUser = 'Demo';
        this.activeRole = 'Demo Role';
        this.appName = 'ARMS';
        this.appVersion = '1.0.0';
    }
}
