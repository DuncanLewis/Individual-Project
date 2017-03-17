import { Injectable } from '@angular/core';
import { Datastore } from '../_services/index';

import { Project } from '../_models/index';


@Injectable()
export class ProjectDataService {

    projects: Project[] = [];

    constructor(private datastore: Datastore) { }

    getProjects(){
        this.datastore.query(Project, {
            page: { size: 10, number: 1}
        }).subscribe(
            (projects: Project[]) => console.log(projects)
        );
    }
}
