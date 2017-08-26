import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
/**
 * Created by 15050978 on 8/16/2017.
 */
@Component({
    selector: 'arms-check-in-req',
    templateUrl: 'check-in-req.component.html',
    styleUrls: ['check-in-req.component.css']
})
export class CheckInRequestComponent implements OnInit,AfterViewInit {
    @ViewChild('pickupDate')
    pickupDate:DatePickerComponent;

    listBox:string[] = ['514-01', '514-02', '514-03', '514-04', '514-05'];
    listBoxToBeSend:string[] = [];

    constructor(private router:Router) {
    }

    ngOnInit():void {
    }

    ngAfterViewInit():void {
        this.pickupDate.setPickerDate();
    }

    doGetPickupDate(event) {

    }

    doSend(item:string) {
        this.listBoxToBeSend.push(item);
        let selectedItemIdx = this.listBox.indexOf(item);
        this.listBox.splice(selectedItemIdx, 1);
    }

    doCancelSend(item:string) {
        this.listBox.push(item);
        let selectedItemIdx = this.listBoxToBeSend.indexOf(item);
        this.listBoxToBeSend.splice(selectedItemIdx, 1);
    }
}