import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
import {MessageInfo} from "../../model/message-info";
/**
 * Created by 15050978 on 8/24/2017.
 */

declare let $: any;

@Component({
    selector: 'arms-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit,AfterViewInit {
    @Input()
    title: string = 'Info';

    @Input()
    contentInfos: MessageInfo[] = [];

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    doShowModal() {
        $('#modalInfo').modal();
    }
}