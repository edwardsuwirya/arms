import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxSend} from "../../model/box-send";
import {CheckInService} from "../../service/check-in.service";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-check-in-approval',
    templateUrl: 'check-in-approval.component.html',
    styleUrls: ['check-in-approval.component.css']
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
        this.route.queryParams.subscribe(params => {
            this.icon = params['icon'];
            this.menuId = params['menuId'];
            this.menuTab = Number(params['menuTab']);
        });
    }

}