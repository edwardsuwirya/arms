import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
/**
 * Created by 15050978 on 9/20/2017.
 */
@Component({
    selector: 'arms-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit,AfterViewInit {
    @Input()
    appName: string = '';

    @Input()
    appVersion: string = '';

    @Input()
    yearProduction: string = '';

    @Input()
    companyProduction: string = '';

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}