import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatastoreService }  from '../_services/datastore.service';

import { Project } from '../_models/project';


//declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    providers: [DatastoreService]
})

export class ProjectListComponent implements OnInit{

    dtOptions: any = {};
    projects;

    constructor(
        private router: Router,
        private datastoreService: DatastoreService,
    ) {}

    /**
     * onSelect
     *
     * Handles a project being selected from the project list, forwards user to the project eetail view
     * @param project
     */
    onSelect(project: Project) {
        this.router.navigate(['/project', project.id]);
    }


    /**
     * getProjects
     *
     * Gets all projects, using the JsonAPI component to query the project model in the backend
     *
     * @returns {Observable<Project[]>}
     */
    getProjects() {
        this.datastoreService.query(Project, {
            include: 'applications'
        }).subscribe(
           // (projects: Project[]) => projects
            projects => this.projects = projects
        );
    }

    /**
     * Initialise the view
     */
    ngOnInit(): void {

        //Call the projectService and subscribe to the results of getProjects
        this.getProjects();


        //Set options for the dataTables plugin
        this.dtOptions = {
            displayLength: 10,
            paginationType: 'full_numbers'
            /*rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
                let self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', nRow).unbind('click');
                $('td', nRow).bind('click', () => {
                    self.someClickHandler(aData);
                });
                return nRow;
            }*/
        };
    }
}
