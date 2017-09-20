/**
 * Created by edo on 06/05/2017.
 */
import {Component, OnInit, AfterViewInit, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../shared/service/local-storage.service";
import {APP_CONFIG} from "../../../shared/model/application-properties";
import {Observable} from "rxjs";

declare let $: any;
declare let _: any;
@Component({
    selector: 'arms-home-page',
    templateUrl: 'home-page.component.html'
})
export class HomePageComponent implements OnInit,AfterViewInit {
    activeUser: string = '';
    activeRole: string = '';

    appName: string = '';
    appVersion: string = '';

    yearProduction: string = '';
    companyProduction: string = '';

    constructor(@Inject(APP_CONFIG) private appConfig,
                private router: Router, private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        Observable.timer(300).do(() => {
            this.activeUser = this.localStorageService.getItem(this.appConfig.tokenUserName);
            this.activeRole = this.localStorageService.getItem(this.appConfig.tokenUserRole);
            this.appName = this.appConfig.appName;
            this.appVersion = this.appConfig.appVersion;
            this.yearProduction = this.appConfig.year;
            this.companyProduction = this.appConfig.company;
        }).subscribe();

    }

    doLogout() {
        this.localStorageService.clearItem();
        this.router.navigate(['/login']);
    }
}
