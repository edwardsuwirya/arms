import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-request',
    templateUrl: './box-maintenance-request.component.html',
    styleUrls: ['./box-maintenance-request.component.css']
})
export class BoxMaintenanceRequestComponent implements OnInit,AfterViewInit {
    boxMaintenanceRequestFormGroup: FormGroup;

    listBoxMaintenance: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;

    constructor(private formBuilder: FormBuilder,
                private boxMaintenanceService: BoxMaintenanceService) {
    }

    ngOnInit(): void {
        this.boxMaintenanceRequestFormGroup = this.formBuilder.group({
            idBox: [''],
            idDoc: [''],
            documentNo: [''],
            documentType: ['']
        });

        this.loading = true;
        this.boxMaintenanceService.getListBoxForMaintenanceRequest().subscribe((res) => {
            this.listBoxMaintenance = res;
            this.loading = false;
        })
    }

    ngAfterViewInit(): void {
    }
}