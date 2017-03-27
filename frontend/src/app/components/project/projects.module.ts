/**
 * Created by duncan on 20/03/2017.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Angular bootstrap
import { JsonApiModule } from 'angular2-jsonapi'; //Json API

import { ProjectRoutingModule } from "./projects-routing.module";


import { FormWizardModule } from 'angular2-wizard';

import { DataTablesModule } from 'angular-datatables'; //Angular datatables

import { ProjectListComponent }    from './project-list.component';
import { ProjectDetailComponent }  from './project-detail.component';
import { ProjectAddComponent }  from './project-add.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormWizardModule,
        DataTablesModule,
        NgbModule,
        ProjectRoutingModule,
        JsonApiModule
    ],
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectAddComponent
    ]
})
export class ProjectsModule {}