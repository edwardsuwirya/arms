import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ReminderService} from "../../service/reminder.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 9/8/2017.
 */
@Component({
    selector: 'arms-reminder',
    templateUrl: 'reminder.component.html'
})
export class ReminderComponent implements OnInit,AfterViewInit {
    loading: boolean = false;

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private reminderService: ReminderService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }

}