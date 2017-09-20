import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
/**
 * Created by edo on 10/09/2017.
 */
@Component({
    selector: 'arms-alert-notification',
    templateUrl: './alert-notification.component.html'
})
export class AlertNotificationComponent implements OnInit,AfterViewInit {
    @Input()
    message:string;

    ngOnInit():void {
    }

    ngAfterViewInit():void {
    }
}