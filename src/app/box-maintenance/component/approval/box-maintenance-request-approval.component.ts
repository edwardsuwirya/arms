import {Component, OnInit, AfterViewInit} from "@angular/core";
import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-request-approval',
    templateUrl: './box-maintenance-request-approval.component.html',
    styleUrls: ['./box-maintenance-request-approval.component.css']
})
export class BoxMaintenanceRequestApprovalComponent implements OnInit,AfterViewInit {

    listBoxMaintenance: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;

    constructor(private boxMaintenanceService: BoxMaintenanceService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.boxMaintenanceService.getListBoxMaintenanceRequestForApproval().subscribe((res) => {
            this.listBoxMaintenance = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
    }
}