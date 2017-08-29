import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

/**
 * Created by 15050978 on 8/29/2017.
 */
@Component({
    selector: 'arms-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {
    loginForm: FormGroup;

    @ViewChild('userNameInput')
    userNameInput: ElementRef;

    constructor(private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            un: ['', Validators.required],
            pw: ['', Validators.required]
        });
        this.doSetFocus();
    }

    ngAfterViewInit(): void {
    }

    doSetFocus() {
        Observable.timer(300).do(() => {
            this.userNameInput.nativeElement.focus();
        }).subscribe();
    }

    doLogin() {
        this.router.navigate(['/home']);
    }
}