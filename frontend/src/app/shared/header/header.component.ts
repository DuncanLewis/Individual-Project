/**
 * Created by duncan on 15/03/2017.
 */
import { Component } from '@angular/core';
//import {C} from '@angular/core';
//import { RouterModule, Route } from '@angular/router';

@Component({
    selector: 'pt-header',
    template: `<nav class="navbar navbar-light bg-faded navbar-toggleable-md">
                    <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">HPE Project Tracker</a>
                
                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Enter a project name, ID or domain">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>`
})

export class HeaderComponent {
}