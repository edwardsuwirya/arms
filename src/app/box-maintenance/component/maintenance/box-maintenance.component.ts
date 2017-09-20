import {BoxMaintenanceRequest} from "../../model/box-maintenance-request";
import {AfterViewInit, OnInit, Component, ViewChild} from "@angular/core";
import {BoxMaintenanceService} from "../../service/box-maintenance.service";
import {BoxDetailMaintenance} from "../../model/box-detail-maintenance";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 9/7/2017.
 */
@Component({
    selector: 'arms-box-maintenance',
    templateUrl: './box-maintenance.component.html'
})
export class BoxMaintenanceComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;
    listBoxMaintenance: BoxMaintenanceRequest[];
    listBoxDetailMaintenance: BoxDetailMaintenance[];

    loading: boolean = false;

    box: BoxMaintenanceRequest;

    idBoxSelected: string;
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

    doMaintenance(box: BoxMaintenanceRequest) {
        this.idBoxSelected = box.idBox;
        this.loading = true;
        this.boxMaintenanceService.getListBoxDetailForMaintenance().subscribe((res) => {
            this.listBoxDetailMaintenance = res;
            this.loading = false;
        })
    }

    doAdd() {
        this.viewModal.doShowModal();
    }

    doUpdate(box: BoxDetailMaintenance) {
    }

    doDelete(box: BoxDetailMaintenance) {
    }
}