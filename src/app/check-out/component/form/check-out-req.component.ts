import {AfterViewInit, OnInit, Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-check-out-req',
    templateUrl: 'check-out-req.component.html',
    styleUrls: ['check-out-req.component.css']
})
export class CheckOutRequestComponent implements OnInit,AfterViewInit {
    @ViewChild('borrowDate')
    borrowDate: DatePickerComponent;

    loading: boolean = false;

    listBox: string[] = ['701217072017001', '701217072017002', '701217072017003', '701217072017004', '701217072017005',
        '701217072017006', '701217072017007'];
    listBoxToBeBorrow: string[] = [];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.borrowDate.setPickerDate();
    }

    doSend(item: string) {
        this.listBoxToBeBorrow.push(item);
        let selectedItemIdx = this.listBox.indexOf(item);
        this.listBox.splice(selectedItemIdx, 1);
    }

    doCancelSend(item: string) {
        this.listBox.push(item);
        let selectedItemIdx = this.listBoxToBeBorrow.indexOf(item);
        this.listBoxToBeBorrow.splice(selectedItemIdx, 1);
    }
}