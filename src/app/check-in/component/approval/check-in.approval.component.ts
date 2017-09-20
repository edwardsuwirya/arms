import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxSend} from "../../model/box-send";
import {CheckInService} from "../../service/check-in.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-check-in-approval',
    templateUrl: 'check-in-approval.component.html'
})
export class CheckInApprovalComponent implements OnInit,AfterViewInit {
    loading: boolean = false;

    listBoxSendForApprove: BoxSend[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private checkInService: CheckInService) {

    }

    ngOnInit(): void {
        this.loading = true;
        this.checkInService.getListBoxForSendApproval().subscribe((res) => {
            this.listBoxSendForApprove = res;
            this.loading = false;
        })
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