/**
 * Created by duncan on 20/03/2017.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../../shared/animations';


import { Project, ProjectService }  from './project.service';

@Component({
    templateUrl: './project-detail.component.html',
    animations: [ slideInDownAnimation ]
})
export class ProjectDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    project: Project;

    private id;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService
    ) {}

    ngOnInit() {
        /*this.route.params
        // (+) converts string 'id' to a number
            .map((params: Params) => this.service.getProject(params['id']))
            .subscribe((project: Project) => this.project = project);*/

        this.route.params.subscribe(params => {
            this.id = params['id'];

            let project = this.service.getProject(params['id']);
        });
    }

    gotoProjects() {
        let projectId = this.project ? this.project.id : null;
        // Pass along the project id if available
        // so that the ProjectList component can select that project.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/projects', { id: projectId}]);
    }
}
