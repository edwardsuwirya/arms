/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, AfterViewInit, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {APP_CONFIG} from "../../shared/model/application-properties";
import {Menu} from "../../arms-menu/model/menu";

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

    constructor(@Inject(APP_CONFIG) private appConfig,
                private router:Router, private localStorageService:LocalStorageService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.activeUser = this.localStorageService.getItem(this.appConfig.tokenUserName);
        this.activeRole = this.localStorageService.getItem(this.appConfig.tokenUserRole);
        this.appName = 'ARMS';
        this.appVersion = '1.0.0';
    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['/login']);
    }
}
