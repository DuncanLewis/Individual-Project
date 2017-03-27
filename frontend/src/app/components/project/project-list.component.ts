import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectService }  from './project.service';


//declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html'
})

export class ProjectListComponent implements OnInit{

    dtOptions: any = {};
    projects: Project[];

    constructor(
        private router: Router,
        private projectService: ProjectService
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

    getAllProjects() {
        this.projectService.getProjects().subscribe(
            //Bind the returned values to projects variable for use in the view
            projects => this.projects = projects
        );
    }

    /**
     * Initialise the view
     */
    ngOnInit(): void {

        //Call the projectService and subscribe to the results of getProjects
        this.getAllProjects();


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
