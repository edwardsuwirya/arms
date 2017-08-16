import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-check-in-req',
    templateUrl: 'check-in-req.component.html',
    styleUrls: ['check-in-req.component.css']
})
export class CheckInRequestComponent implements OnInit,AfterViewInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }
}