/**
 * Created by duncan on 16/03/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()

/**
 * @name AuthGuard
 *
 * Prevents unauthenticated users from accessing restricted areas of the application
 */
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        //Attemps to access the currentUser store within localstorage
        if (localStorage.getItem('currentUser')) {
            //currentUser was accessible, so return true (user is logged in)
            return true;
        }

        //User isn't logged in, so change to login page and return false
        this.router.navigate(['/login']);
        return false;
    }
}