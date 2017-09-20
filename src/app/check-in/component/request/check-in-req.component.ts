import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-check-in-req',
    templateUrl: 'check-in-req.component.html'
})
export class CheckInRequestComponent implements OnInit,AfterViewInit {
    @ViewChild('pickupDate')
    pickupDate: DatePickerComponent;

    loading: boolean = false;

    listBox: string[] = ['514-01', '514-02', '514-03', '514-04', '514-05'];
    listBoxToBeSend: string[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.pickupDate.setPickerDate();
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }

    doGetPickupDate(event) {

    }

    doSend(item: string) {
        this.listBoxToBeSend.push(item);
        let selectedItemIdx = this.listBox.indexOf(item);
        this.listBox.splice(selectedItemIdx, 1);
    }

    doCancelSend(item: string) {
        this.listBox.push(item);
        let selectedItemIdx = this.listBoxToBeSend.indexOf(item);
        this.listBoxToBeSend.splice(selectedItemIdx, 1);
    }

    doSubmitApproval() {

    }
}