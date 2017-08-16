import {Router} from "@angular/router";
import {Component} from "@angular/core";
/**
 * Created by 15050978 on 8/16/2017.
 */


@Component({
    selector: 'arms-go-home',
    template: `<span class="go-home" (click)="goHome()"><i class="fa fa-home"></i> Home</span>`,
    styles: [`
                    .go-home{
                        cursor: pointer;                     
                    }
             `]
})
export class GoHomeComponent {
    constructor(private router: Router) {
    }

    goHome() {
        this.router.navigateByUrl('/home');
    }
}