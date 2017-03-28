import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Core angular module
import { FormsModule } from '@angular/forms'; // Core forms module
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http'; // Core HTTP Module
import { RouterModule } from '@angular/router'; // Standard router module
import { JsonApiModule } from 'angular2-jsonapi'; //Json API
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Angular bootstrap
import { DataTablesModule } from 'angular-datatables'; //Angular datatables
import { FormWizardModule } from 'angular2-wizard';
import { MomentModule } from 'angular2-moment';

//Used to create our fake backend
/*import { fakeBackendProvider } from './components/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';*/
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './components/_guards/index';
import { AuthService, UserService } from './components/_services/index';

//Import our view components
import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';
import { ProjectsModule } from './components/project/projects.module';

//Import view helper components
//ToDo: convert to a barrel?
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
    //Our custom application components
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        LoginComponent,
        HomeComponent
    ],
    //External imports, reflected in the imports above
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonApiModule,
        NgbModule.forRoot(),
        DataTablesModule,
        FormWizardModule,
        routing,
        MomentModule,

        ProjectsModule
    ],
    //Our custom services
    providers: [
        AuthGuard,
        AuthService,
        UserService,
        //DatastoreService,

        //ToDo: remove once proper backend is implemented
        /*fakeBackendProvider,
        MockBackend,*/
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
