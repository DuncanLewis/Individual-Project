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
    Response,
    Document
    }
    from '../_models/index';

@Injectable()
@JsonApiDatastoreConfig({
    baseUrl: 'http://www.project.dev/',
    models: {
        users: User,
        applications: Application,
        projects: Project,
        gating_boards: GatingBoard,
        risks: Risk,
        responses: Response,
        documents: Document
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
}