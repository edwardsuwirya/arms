import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {BoxLend} from "../../model/box-lend";
import {BoxLendService} from "../../service/box-lend.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-box-receive',
    templateUrl: 'box-receive.component.html'
})
export class BoxReceiveComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;

    @ViewChild('boxReceiveDate')
    boxReceiveDate: DatePickerComponent;

    loading: boolean = false;
    listBoxLendReceive: BoxLend[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private boxLendService: BoxLendService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.boxLendService.getListBoxForLendReceive().subscribe((res) => {
            this.listBoxLendReceive = res;
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

    doReceive(box) {
        this.boxReceiveDate.setPickerDate();
        this.viewModal.doShowModal();
    }

    doSave(event) {
        if (event) {
            this.viewModal.doCloseModal();
        }
    }
}