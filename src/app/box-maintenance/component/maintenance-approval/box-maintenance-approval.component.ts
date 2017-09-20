import {Component, OnInit, AfterViewInit} from "@angular/core";
import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-approval',
    templateUrl: './box-maintenance-approval.component.html'
})
export class BoxMaintenanceApprovalComponent implements OnInit,AfterViewInit {

    listBoxMaintenanceApproval: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;
    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private boxMaintenanceService: BoxMaintenanceService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.boxMaintenanceService.getListBoxMaintenanceForApproval().subscribe((res) => {
            this.listBoxMaintenanceApproval = res;
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