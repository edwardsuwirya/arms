import {OnInit, Component, AfterViewInit} from "@angular/core";
import {BoxReturnService} from "../../service/box-return.service";
import {BoxReturn} from "../../model/box-return";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-box-return-approval',
    templateUrl: 'box-return-approval.component.html',
    styleUrls: ['box-return-approval.component.css']
})
export class BoxReturnApprovalComponent implements OnInit,AfterViewInit {
    loading: boolean = false;

    listBoxReturnForApprove: BoxReturn[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private boxReturnService: BoxReturnService) {

    }

    ngOnInit(): void {
        this.loading = true;
        this.boxReturnService.getListBoxForReturnApproval().subscribe((res) => {
            this.listBoxReturnForApprove = res;
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

    doSelectForApproval(box: BoxReturn) {

    }

    doApprove() {

    }
}