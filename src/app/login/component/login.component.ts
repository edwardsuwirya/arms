import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";

/**
 * Created by 15050978 on 8/29/2017.
 */
@Component({
    selector: 'arms-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {
    loginForm:FormGroup;

    @ViewChild('userNameInput')
    userNameInput:ElementRef;

    loading:boolean = false;
    error:boolean = false;

    constructor(private router:Router, private formBuilder:FormBuilder,
                private loginService:LoginService) {
    }

    ngOnInit():void {
        this.loginForm = this.formBuilder.group({
            un: ['', Validators.required],
            pw: ['', Validators.required]
        });
        this.doSetFocus();
    }

    ngAfterViewInit():void {
    }

    doSetFocus() {
        Observable.timer(300).do(() => {
            this.userNameInput.nativeElement.focus();
        }).subscribe();
    }

    doLogin() {
        this.loading = true;
        this.loginService.doUserLogin(this.loginForm.controls['un'].value, this.loginForm.controls['pw'].value).subscribe((res)=> {
            if (res) {
                this.router.navigate(['/home']);
            } else {
                this.error = true;
            }
            this.loading = false;
        }, (err)=> {
            this.loading = false;
        })

    }
}