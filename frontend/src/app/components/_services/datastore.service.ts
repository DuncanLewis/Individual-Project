/**
 * Created by duncan on 17/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import { AuthService } from './auth.service'

import { User, Project } from '../_models/index';

@Injectable()
@JsonApiDatastoreConfig({
    baseUrl: 'http://www.project.dev/',
    models: {
        users: User,
        projects: Project

    }
})
export class DatastoreService extends JsonApiDatastore {

    constructor(
        http: Http,
        private authService: AuthService
    ) {
        super(http);
        this.headers = new Headers({'Authorization': 'Bearer ' + this.authService.token});
    }
}