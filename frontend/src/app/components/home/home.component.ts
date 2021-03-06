/**
 * Created by duncan on 16/03/2017.
 */
import { Component, OnInit } from '@angular/core';

import { DatastoreService } from '../_services/index';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

/**
 * @name HomeComponent
 *
 * Forms the first login page, the dashboard
 */
export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
}