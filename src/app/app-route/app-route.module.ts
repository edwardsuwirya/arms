/**
 * Created by edo on 21/04/2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../home/component/home-page.component";
import {SharedModule} from "../shared/shared.module";
import {WelcomePageComponent} from "../home/component/welcome-page.component";
import {DOCUMENT_REGISTRATION_PATH} from "../document-registration/document-registration.module";
import {CHECK_IN_PATH} from "../check-in/check-in.module";
import {CHECK_OUT_PATH} from "../check-out/check-out.module";
import {BOX_REGISTRATION_PATH} from "../box-registration/box-registration.module";
import {LoginComponent} from "../login/component/login.component";
import {DOCUMENT_SEARCH_LEND_PATH} from "../document-search-lend/document-search-lend.module";
import {BOX_MAINTENANCE_PATH} from "../box-maintenance/box-maintenance.module";
import {BOX_RETURN_PATH} from "../box-return/box-return.module";


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'home', component: HomePageComponent,
        children: [
            {
                path: '',
                component: WelcomePageComponent,
            },
            {
                path: 'boxRegistration',
                children: BOX_REGISTRATION_PATH
            },
            {
                path: 'boxMaintenance',
                children: BOX_MAINTENANCE_PATH
            },
            {
                path: 'boxReturn',
                children: BOX_RETURN_PATH
            },
            {
                path: 'documentRegistration',
                children: DOCUMENT_REGISTRATION_PATH
            },
            {
                path: 'documentSearchLend',
                children: DOCUMENT_SEARCH_LEND_PATH
            },
            {
                path: 'checkIn',
                children: CHECK_IN_PATH
            },
            {
                path: 'checkOut',
                children: CHECK_OUT_PATH
            },
        ]
    },
    {path: '**', component: HomePageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        SharedModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRouteModule {
}
