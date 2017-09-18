import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ReminderService} from "../../service/reminder.service";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by 15050978 on 9/8/2017.
 */
@Component({
    selector: 'arms-reminder',
    templateUrl: 'reminder.component.html',
    styleUrls: ['reminder.component.css']
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
        this.route.queryParams.subscribe(params => {
            this.icon = params['icon'];
            this.menuId = params['menuId'];
            this.menuTab = Number(params['menuTab']);
        });
    }

}