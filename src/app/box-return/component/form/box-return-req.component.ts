import {AfterViewInit, OnInit, Component, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {Observable} from "rxjs";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-box-return-req',
    templateUrl: 'box-return-req.component.html'
})
export class BoxReturnRequestComponent implements OnInit,AfterViewInit {
    @ViewChild('returnDate')
    returnDate: DatePickerComponent;

    loading: boolean = false;

    listBox: string[] = ['701217072017001', '701217072017002', '701217072017003', '701217072017004', '701217072017005',
        '701217072017006', '701217072017007'];
    listBoxToBeReturn: string[] = [];

    icon: string = '';
    menuId: string = '';
    menuTab: number;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.returnDate.setPickerDate();
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.icon = params['icon'];
                this.menuId = params['menuId'];
                this.menuTab = Number(params['menuTab']);
            });
        }).subscribe();
    }

    doSend(item: string) {
        this.listBoxToBeReturn.push(item);
        let selectedItemIdx = this.listBox.indexOf(item);
        this.listBox.splice(selectedItemIdx, 1);
    }

    doCancelSend(item: string) {
        this.listBox.push(item);
        let selectedItemIdx = this.listBoxToBeReturn.indexOf(item);
        this.listBoxToBeReturn.splice(selectedItemIdx, 1);
    }

    doSubmitApproval() {

    }
}