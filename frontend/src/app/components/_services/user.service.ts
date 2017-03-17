/**
 * Created by duncan on 16/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthService } from '../_services/index';
import { User } from '../_models/index';

@Injectable()

/**
 * @name UserService
 *
 * UserService implements functionality to get all Users from the DB - this is purely to test API functionality
 */
export class UserService {
    constructor(
        private http: Http,
        private authService: AuthService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token - uses same authentication (Bearer) as CakePHP API is expecting

        let headers = new Headers({'Accept': 'application/vnd.api+json', 'Authorization': 'Bearer ' + this.authService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://www.project.dev/users/', options)
            .map((response: Response) => response.json());
    }
}