import { Component, OnInit } from '@angular/core';

import { Datastore } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit{

    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            displayLength: 2,
            paginationType: 'full_numbers'
        };
    }

}
