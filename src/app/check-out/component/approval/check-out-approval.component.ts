import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxLendService} from "../../service/box-lend.service";
import {BoxLend} from "../../model/box-lend";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-check-out-approval',
    templateUrl: 'check-out-approval.component.html',
    styleUrls: ['check-out-approval.component.css']
})
export class CheckOutApprovalComponent implements OnInit,AfterViewInit {
    loading: boolean = false;

    listBoxLendForApprove: BoxLend[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private boxLendService: BoxLendService) {

    }

    ngOnInit(): void {
        this.loading = true;
        this.boxLendService.getListBoxForLendApproval().subscribe((res) => {
            this.listBoxLendForApprove = res;
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

    doSelectForApproval(box: BoxLend) {

    }

    doApprove() {

    }
}