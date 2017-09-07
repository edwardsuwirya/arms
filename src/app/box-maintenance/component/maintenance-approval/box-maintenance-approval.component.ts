import {Component, OnInit, AfterViewInit} from "@angular/core";
import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-approval',
    templateUrl: './box-maintenance-approval.component.html',
    styleUrls: ['./box-maintenance-approval.component.css']
})
export class BoxMaintenanceApprovalComponent implements OnInit,AfterViewInit {

    listBoxMaintenanceApproval: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;

    constructor(private boxMaintenanceService: BoxMaintenanceService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.boxMaintenanceService.getListBoxMaintenanceForApproval().subscribe((res) => {
            this.listBoxMaintenanceApproval = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
    }
}