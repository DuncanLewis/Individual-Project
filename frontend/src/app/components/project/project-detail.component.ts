/**
 * Created by duncan on 20/03/2017.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {slideInDownAnimation} from '../../shared/animations';
import {Project} from '../_models/project';
import {Risk} from '../_models/risk';
import {Document} from '../_models/document';

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

    documentForm: FormGroup;

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


    /**
     * @name createRisk
     *
     * Handles the creation of a new risk from the risks tab
     *
     * ToDo: convert to saving via the associated project model so that the view will be updated with the new risk -- DONE
     */
    createRisk() {
        let project = this.datastoreService.peekRecord(Project, this.id);
        let risk = this.datastoreService.createRecord(Risk, {
            project_id: this.id,
            title: this.newRiskText,
            //content: 'My risk content'
            project: project
        });
        risk.save().subscribe();
        this.newRiskText = '';
    }

    selectRisk() {
    }


    /**
     * @name createDocument
     *
     * Handles the creation of a new document from the documentation tab
     *
     * ToDo: associate with a user record
     * ToDo: handle deletion of a document
     * ToDo: handle download of document
     */
    createDocument() {

        //Set the formModel so we can access form values
        const formModel = this.documentForm.value;

        let project = this.datastoreService.peekRecord(Project, this.id);
        let document = this.datastoreService.createRecord(Document, {
            name: formModel.name as string,
            link: formModel.link as string,
            gate: formModel.gate.replace('G','') as number, //Remove the G from "G5, G-2 etc. to leave a number only as required by database
            project: project
        });
        //Conduct the save action via the datastoreService. We then subscribe to the result which updates the model, thus adding the new record to the view
        document.save().subscribe();

        //Reset the form to blank
        this.documentForm.reset();
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getProject(this.id);

        });

        this.documentForm = this.formBuilder.group({
            name: ['', Validators.required],
            gate: ['', Validators.required],
            link: ['', Validators.required],
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
