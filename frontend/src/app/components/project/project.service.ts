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

@Injectable()

/**
 * @name ProjectService
 *
 * ToDo: extend this functionality to include updating
 *
 * Implements the project API service using JsonAPI Component
 */
export class ProjectService {

    projects: Project[];

    constructor(private datastore: DatastoreService) { }

    /**
     * getProjects
     *
     * Gets all projects, using the JsonAPI component to query the project model in the backend
     *
     * @returns {Observable<Project[]>}
     */
    getProjects() {
        return this.datastore.query(Project);
    }

    /**
     * getProject
     *
     * Gets a SINGLE project, with a given ID, using the JsonAPI Component to query project model backend
     * @param id
     */
    getProject(id: string) {
        this.datastore.findRecord(Project, id).subscribe(
            (project: Project) => project
        );

    }


}
