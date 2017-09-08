import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ReminderService} from "../../service/reminder.service";
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

    constructor(private reminderService: ReminderService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

}