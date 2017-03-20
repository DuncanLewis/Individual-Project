/**
 * Created by duncan on 17/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

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

    constructor(http: Http) {
        super(http);
    }

}