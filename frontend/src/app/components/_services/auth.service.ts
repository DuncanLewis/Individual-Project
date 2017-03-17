/**
 * Created by duncan on 16/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
/**
 * @name AuthService
 *
 * Handles user login and logout functionality by calling the Cake API and attempting to
 * match a user to a username and password combination. When matched, the JWT token is
 * given in response by API
 */
export class AuthService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

       /* let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });*/
        let body =  JSON.stringify({ "username": username, "password": password });

        return this.http
            .post('http://www.project.dev/users/token',body, options) //ToDo: turn this url into a global var
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let success = response.json() && response.json().success;
                if (success) {
                    let token = response.json() && response.json().data.token;
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
