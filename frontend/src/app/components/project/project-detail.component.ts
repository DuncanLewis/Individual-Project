/**
 * Created by duncan on 20/03/2017.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../../shared/animations';
import { Project } from '../_models/project';


import { DatastoreService }  from '../_services/datastore.service';


@Component({
    templateUrl: './project-detail.component.html',
    animations: [ slideInDownAnimation ],
    providers: [DatastoreService]
})
export class ProjectDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    private id;
    project;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        //private allGates:any = {},
        private datastoreService: DatastoreService
    ) {}


    /**
     * getProject
     *
     * Gets a SINGLE project, with a given ID, using the JsonAPI Component to query project model backend
     * @param id
     */
    getProject(id: string) {
         this.datastoreService.findRecord(Project, id, {
            include: 'applications, gating_boards'
         }).subscribe(
             //(project: Project) => console.log(project)
             project => this.project = project
         );
     }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getProject(this.id);
        });
    }

    gotoProjects() {
        //let projectId = this.project ? this.project.id : null;
        // Pass along the project id if available
        // so that the ProjectList component can select that project.
        // Include a junk 'foo' property for fun.
        //this.router.navigate(['/projects', { id: projectId}]);
    }
}
