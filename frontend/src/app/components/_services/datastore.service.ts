/**
 * Created by duncan on 17/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import { AuthService } from './auth.service'

import {
    Application,
    User,
    Project,
    Risk,
    GatingBoard,
    Response
    }
    from '../_models/index';

@Injectable()
@JsonApiDatastoreConfig({
    baseUrl: 'http://www.project.dev/',
    models: {
        users: User,
        applications: Application,
        projects: Project,
        gating_boards: GatingBoard

    }
})

/**
 * @name DatastoreService
 *
 * ToDo: extend this functionality to include creating, updating and deleting
 *
 * Implements the project API service using JsonAPI Component
 */
export class DatastoreService extends JsonApiDatastore {

    constructor(
        http: Http,
        private authService: AuthService
    ) {
        super(http);
        this.headers = new Headers({'Authorization': 'Bearer ' + this.authService.token});
    }


    /**
     * getProjects
     *
     * Gets all projects, using the JsonAPI component to query the project model in the backend
     *
     * @returns {Observable<Project[]>}
     */
    /*getProjects() {
        return this.datastore.query(Project, {
            include: 'applications'
        });
    }*/

    /**
     * getProject
     *
     * Gets a SINGLE project, with a given ID, using the JsonAPI Component to query project model backend
     * @param id
     */
    /*getProject(id: string) {
        return this.datastore.findRecord(Project, id, {
            include: 'applications'
        });
    }*/
}