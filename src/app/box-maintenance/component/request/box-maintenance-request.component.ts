import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance-request',
    templateUrl: './box-maintenance-request.component.html'
})
export class BoxMaintenanceRequestComponent implements OnInit,AfterViewInit {
    boxMaintenanceRequestFormGroup: FormGroup;

    listBoxMaintenance: BoxMaintenanceRequest[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;
    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder,
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
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }
}