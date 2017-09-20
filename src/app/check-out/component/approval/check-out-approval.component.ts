import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxLendService} from "../../service/box-lend.service";
import {BoxLend} from "../../model/box-lend";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-check-out-approval',
    templateUrl: 'check-out-approval.component.html'
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
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }

    doSelectForApproval(box: BoxLend) {

    }

    doApprove() {

    }
}