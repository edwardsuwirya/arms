import {OnInit, Component, AfterViewInit, ViewChild} from "@angular/core";
import {ViewModalComponent} from "../../../shared/component/view-modal/view-modal.component";
import {DatePickerComponent} from "../../../shared/component/date-picker/date-picker.component";
/**
 * Created by edo on 26/08/2017.
 */
@Component({
    selector: 'arms-box-send',
    templateUrl: 'box-send.component.html',
    styleUrls: ['box-send.component.css']
})
export class BoxSendComponent implements OnInit,AfterViewInit {
    @ViewChild('viewModal')
    viewModal: ViewModalComponent;

    @ViewChild('boxSendDate')
    boxSendDate: DatePickerComponent;

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doReceive(box) {
        this.boxSendDate.setPickerDate();
        this.viewModal.doShowModal();
    }
}