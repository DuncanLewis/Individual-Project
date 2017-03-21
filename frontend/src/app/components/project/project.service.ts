/**
 * Created by duncan on 20/03/2017.
 */
import { Injectable } from '@angular/core';
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from "angular2-jsonapi";
import { DatastoreService } from "../_services/datastore.service";

@JsonApiModelConfig({
    type: 'projects'
})

export class Project extends JsonApiModel{
   //constructor(public id: string, public name: string, status: string) { }
    @Attribute()
        id: string;

    @Attribute()
        name: string;

    @Attribute()
        status: string;
}

//ToDo: grab this data from the API
/*let PROJECTS = [
    new Project('F0005G', 'CT Architecture Evolution Phase 1', 'closed'),
    new Project('G0094A', 'SSC 3rd party Delivery and Procurement: Complex Tax countries', 'closed'),
    new Project('G0187A', 'End Customer', 'active'),
    new Project('H0029A', 'Improvement of Communication with LLP & LLP Standardization', 'active'),
    new Project('G0109B', 'WES Evolution Part II', 'active'),
    new Project('H0056A', 'ERP 2016 critical country deployments Bundle 5', 'active')
];*/

//let projectsPromise = Promise.resolve(this.datastore.query(Project).subscribe((projects: Project[]) => Promise.resolve(projects)));

@Injectable()

export class ProjectService {

    projects: Project[];
    //getProjects() { return projectsPromise; }

    /*getProject(id: string | string) {
        return projectsPromise
            .then(projects => projects.find(project => project.id === id));
    }*/

    constructor(private datastore: DatastoreService) { }

    getProjects() {
        return this.datastore.query(Project);

        //return Promise.resolve(this.datastore.query(Project).subscribe((projects: Project[]) => Promise.resolve(projects)));
    }

    getProject(id: string) {
        this.datastore.findRecord(Project, id).subscribe(
            (project: Project) => project
        );

    }


}
