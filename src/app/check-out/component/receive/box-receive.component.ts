import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
import {BoxLend} from "../../model/box-lend";
import {BoxLendService} from "../../service/box-lend.service";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-box-receive',
    templateUrl: 'box-receive.component.html',
    styleUrls: ['box-receive.component.css']
})
export class BoxReceiveComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal:ViewModalComponent;

    @ViewChild('boxReceiveDate')
    boxReceiveDate:DatePickerComponent;

    loading:boolean = false;
    listBoxLendReceive:BoxLend[] = [];

    constructor(private boxLendService:BoxLendService) {

    }

    ngOnInit():void {
        this.loading = true;
        this.boxLendService.getListBoxForLendReceive().subscribe((res) => {
            this.listBoxLendReceive = res;
            this.loading = false;
        })
    }

    ngAfterViewInit():void {
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