/**
 * Created by duncan on 20/03/2017.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DataTablesModule } from 'angular-datatables'; //Angular datatables

import { ProjectListComponent }    from './project-list.component';
import { ProjectDetailComponent }  from './project-detail.component';

import { ProjectService } from './project.service';

import { ProjectRoutingModule } from "./projects-routing.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTablesModule,
        ProjectRoutingModule
    ],
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent
    ],
    providers: [ ProjectService ]
})
export class ProjectsModule {}