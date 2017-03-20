/**
 * Created by duncan on 16/03/2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';

import { AuthGuard } from './components/_guards/index';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard' }
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
    //{ path: '**', component: PageNotFoundComponent } //ToDo: implement 404 component
];

export const routing = RouterModule.forRoot(appRoutes);