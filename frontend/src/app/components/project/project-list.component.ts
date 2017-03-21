import { Component, OnInit } from '@angular/core';


import { Project, ProjectService }  from './project.service';


declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html'
})

export class ProjectListComponent implements OnInit{

    message: string = '';
    dtOptions: any = {};

    projects: Project;

    constructor(
        private service: ProjectService
    ) {}

    someClickHandler(info: any): void {
        this.message = info.id;
    }

    ngOnInit(): void {

        this.service.getProjects();

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
