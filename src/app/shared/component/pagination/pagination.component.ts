import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
/**
 * Created by edo on 25/08/2017.
 */
@Component({
    selector: 'arms-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input()
    noPerPage:number = 5;

    @Input()
    totalPage:number = 1;

    @Output()
    selectedPage:EventEmitter<number> = new EventEmitter();

    pageIdx:number = 0;

    paging:number[] = [];

    constructor() {
    }

    ngOnInit():void {
        this.recalculate();
    }

    recalculate() {
        this.paging = [];
        for (let i = 1; i <= (this.totalPage); i++) {
            let ii = i + (this.noPerPage * this.pageIdx);
            if (ii <= (this.noPerPage * (this.pageIdx + 1)) && ii <= this.totalPage) {
                this.paging.push(ii);
            }

        }
    }

    doFirst() {
        this.pageIdx = 0;
        this.recalculate();
    }

    doLast() {
        if (this.totalPage <= this.noPerPage) {
            return;
        } else {
            this.pageIdx = Math.ceil(this.totalPage / this.noPerPage) - 1;
            this.recalculate();
        }

    }

    doPrev() {
        if (this.pageIdx > 0) {
            this.pageIdx = this.pageIdx - 1;
            this.recalculate();
        }
    }

    doSelectPage(thisPage:number) {
        this.selectedPage.emit(thisPage);
    }

    doNext() {
        if (this.totalPage <= this.noPerPage) {
            return;
        } else if (this.pageIdx < ((this.totalPage / this.noPerPage) - 1)) {
            this.pageIdx = this.pageIdx + 1;
            this.recalculate();
        }
    }
}