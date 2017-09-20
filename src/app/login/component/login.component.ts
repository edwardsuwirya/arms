import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";
import {APP_CONFIG} from "../../shared/model/application-properties";

/**
 * Created by 15050978 on 8/29/2017.
 */

@Component({
    selector: 'arms-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit,AfterViewInit {
    loginForm: FormGroup;

    @ViewChild('userNameInput')
    userNameInput: ElementRef;

    loading: boolean = false;
    error: boolean = false;

    appName: string = '';
    appVersion: string = '';

    yearProduction: string = '';
    companyProduction: string = '';

    constructor(@Inject(APP_CONFIG) private appConfig,
                private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            un: ['', Validators.required],
            pw: ['', Validators.required]
        });
        this.doSetFocus();
    }

    ngAfterViewInit(): void {
        Observable.timer(300).do(() => {
            this.route.queryParams.subscribe(params => {
                this.appName = this.appConfig.appName;
                this.appVersion = this.appConfig.appVersion;
                this.yearProduction = this.appConfig.year;
                this.companyProduction = this.appConfig.company;
            });
        }).subscribe();

    }

    doSetFocus() {
        Observable.timer(300).do(() => {
            this.userNameInput.nativeElement.focus();
        }).subscribe();
    }

    doLogin() {
        if (this.loginForm.valid) {
            this.loginForm.disable();
            this.loading = true;
            this.loginService.doUserLogin(this.loginForm.controls['un'].value, this.loginForm.controls['pw'].value).subscribe((res) => {
                if (res) {
                    this.router.navigate(['/home']);
                } else {
                    this.error = true;
                }
                this.loginForm.enable();
                this.loading = false;
            }, (err) => {
                this.loginForm.enable();
                this.loading = false;
            })
        } else {
            this.doSetFocus();
            this.error = true;
        }
    }
}