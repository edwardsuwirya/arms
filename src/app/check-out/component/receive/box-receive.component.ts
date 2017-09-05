import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
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
    viewModal: ViewModalComponent;

    @ViewChild('boxReceiveDate')
    boxReceiveDate: DatePickerComponent;

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doReceive(box) {
        this.boxReceiveDate.setPickerDate();
        this.viewModal.doShowModal();
    }
}