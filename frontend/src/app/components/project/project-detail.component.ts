/**
 * Created by duncan on 20/03/2017.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {slideInDownAnimation} from '../../shared/animations';
import {Project} from '../_models/project';
import {Risk} from '../_models/risk';

import {DatastoreService}  from '../_services/datastore.service';
import {
    FormGroup, FormControl, Validators, FormBuilder
}
    from '@angular/forms';


@Component({
    templateUrl: './project-detail.component.html',
    animations: [slideInDownAnimation],
    providers: [DatastoreService]
})
export class ProjectDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    private id;
    project;
    risk: Risk;
    newRiskText = '';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private datastoreService: DatastoreService,
                private formBuilder: FormBuilder) {
    }


    /**
     * getProject
     *
     * Gets a SINGLE project, with a given ID, using the JsonAPI Component to query project model backend
     * @param id
     */
    getProject(id: string) {
        this.datastoreService.findRecord(Project, id, {
            include: 'applications, gating_boards, responses, risks'
        }).subscribe(
            //(project: Project) => console.log(project)
            project => this.project = project
        );
    }

    resolveRisk(id: string) {

    }


    createRisk() {
        let risk = this.datastoreService.createRecord(Risk, {
            project_id: this.id,
            title: this.newRiskText,
            //content: 'My risk content'
        });
        risk.save().subscribe();
        this.newRiskText = '';
    }

    selectRisk() {
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
