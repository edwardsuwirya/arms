import {AfterViewInit, OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-check-out-req',
    templateUrl: 'check-out-req.component.html',
    styleUrls: ['check-out-req.component.css']
})
export class CheckOutRequestComponent implements OnInit,AfterViewInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }
}