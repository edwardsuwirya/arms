import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {CheckInService} from "../../service/check-in.service";
import {BoxSend} from "../../model/box-send";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-box-send',
    templateUrl: 'box-send.component.html'
})
export class BoxSendComponent implements OnInit,AfterViewInit {
    loading: boolean = false;

    @ViewChild('viewModal')
    viewModal: ViewModalComponent;

    @ViewChild('boxSendDate')
    boxSendDate: DatePickerComponent;

    listBoxSend: BoxSend[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private checkInService: CheckInService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.checkInService.getListBoxForSend().subscribe((res) => {
            this.listBoxSend = res;
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

    doSend(box) {
        this.boxSendDate.setPickerDate();
        this.viewModal.doShowModal();
    }

    doSave(event) {
        if (event) {
            this.viewModal.doCloseModal();
        }
    }
}