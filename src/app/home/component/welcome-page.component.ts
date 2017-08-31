import {Component} from "@angular/core";
/**
 * Created by edo on 15/06/2017.
 */
@Component({
    selector: 'arms-welcome-page',
    template: `
        <div class="container-fluid">
            <arms-menu [isWelcome]="true"></arms-menu>
        </div>
    `,
    styles: []
})
export class WelcomePageComponent {
}
