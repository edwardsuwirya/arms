import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxLendService} from "../../service/box-lend.service";
import {BoxLend} from "../../model/box-lend";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-check-out-approval',
    templateUrl: 'check-out-approval.component.html',
    styleUrls: ['check-out-approval.component.css']
})
export class CheckOutApprovalComponent implements OnInit,AfterViewInit {
    loading:boolean = false;

    listBoxLendForApprove:BoxLend[] = [];

    constructor(private boxLendService:BoxLendService) {

    }

    ngOnInit():void {
        this.loading = true;
        this.boxLendService.getListBoxForLendApproval().subscribe((res) => {
            this.listBoxLendForApprove = res;
            this.loading = false;
        })
    }

    ngAfterViewInit():void {
    }

    doSelectForApproval(box:BoxLend) {

    }

    doApprove() {

    }
}