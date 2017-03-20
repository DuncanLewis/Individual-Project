/**
 * Created by duncan on 20/03/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent }    from './project-list.component';
import { ProjectDetailComponent }  from './project-detail.component';

const projectsRoutes: Routes = [
    { path: 'projects',  component: ProjectListComponent },
    { path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule { }
