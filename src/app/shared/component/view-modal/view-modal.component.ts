import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
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

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doShowModal() {
        $('#' + this.id).modal();
    }
}