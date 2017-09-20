import {Component, OnInit, AfterViewInit} from "@angular/core";
import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-request-approval',
    templateUrl: './box-maintenance-request-approval.component.html'
})
export class BoxMaintenanceRequestApprovalComponent implements OnInit,AfterViewInit {

    listBoxMaintenance: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private boxMaintenanceService: BoxMaintenanceService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.boxMaintenanceService.getListBoxMaintenanceRequestForApproval().subscribe((res) => {
            this.listBoxMaintenance = res;
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