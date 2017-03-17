import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { JsonApiModule } from 'angular2-jsonapi';

//Used to create our fake backend
/*import { fakeBackendProvider } from './components/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';*/
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
//import { ProjectComponent } from './components/projects/';

import { AuthGuard } from './components/_guards/index';
import { AuthService, UserService } from './components/_services/index';
import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';

//ToDo: convert to a barrel?
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        HomeComponent
        //ProjectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonApiModule,
        routing
    ],
    providers: [
        AuthGuard,
        AuthService,
        UserService,

        //ToDo: remove once proper backend is implemented
        /*fakeBackendProvider,
        MockBackend,*/
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
