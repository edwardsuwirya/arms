import {Component, OnInit, AfterViewInit, Input, EventEmitter, Output} from "@angular/core";
/**
 * Created by 15050978 on 8/24/2017.
 */
declare let $: any;
@Component({
    selector: 'arms-view-modal',
    templateUrl: './view-modal.component.html',
    styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit,AfterViewInit {
    @Input()
    title: string = 'Info';

    @Input()
    id: string = 'viewModal';

    @Input()
    modalSize: string = 'm';

    @Input()
    showFooter: boolean = true;

    @Input()
    showButton: {} = {
        'save': false,
        'cancel': false,
        'close': 'true'
    };

    @Output()
    saveClick: EventEmitter<boolean> = new EventEmitter();

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doShowModal() {
        $('#' + this.id).modal();
    }

    doCloseModal() {
        $('#' + this.id).modal('hide');
    }

    doSave() {
        this.saveClick.emit(true);
    }
}