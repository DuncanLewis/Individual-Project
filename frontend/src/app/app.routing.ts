/**
 * Created by duncan on 16/03/2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';
import { AuthGuard } from './components/_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);