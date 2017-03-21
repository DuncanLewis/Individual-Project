var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("app/app.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    moduleId: module.id,
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
System.register("app/components/_services/auth.service", ["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, http_1, AuthService;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            /**
             * @name AuthService
             *
             * Handles user login and logout functionality by calling the Cake API and attempting to
             * match a user to a username and password combination. When matched, the JWT token is
             * given in response by API
             */
            AuthService = (function () {
                function AuthService(http) {
                    this.http = http;
                    // set token if saved in local storage
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    this.token = currentUser && currentUser.token;
                }
                AuthService.prototype.login = function (username, password) {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    /* let headers = new Headers;
                     headers.append('Content-Type', 'application/json');
                     let options = new RequestOptions({ headers: headers });*/
                    var body = JSON.stringify({ "username": username, "password": password });
                    return this.http
                        .post('http://www.project.dev/users/token', body, options) //ToDo: turn this url into a global var
                        .map(function (response) {
                        // login successful if there's a jwt token in the response
                        var success = response.json() && response.json().success;
                        if (success) {
                            var token = response.json() && response.json().data.token;
                            // set token property
                            _this.token = token;
                            // store username and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                            // return true to indicate successful login
                            return true;
                        }
                        else {
                            // return false to indicate failed login
                            return false;
                        }
                    });
                };
                AuthService.prototype.logout = function () {
                    // clear token remove user from local storage to log user out
                    this.token = null;
                    localStorage.removeItem('currentUser');
                };
                return AuthService;
            }());
            AuthService = __decorate([
                core_2.Injectable()
            ], AuthService);
            exports_2("AuthService", AuthService);
        }
    };
});
System.register("app/components/_models/user", ["angular2-jsonapi"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var angular2_jsonapi_1, User;
    return {
        setters: [
            function (angular2_jsonapi_1_1) {
                angular2_jsonapi_1 = angular2_jsonapi_1_1;
            }
        ],
        execute: function () {
            User = (function (_super) {
                __extends(User, _super);
                function User() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return User;
            }(angular2_jsonapi_1.JsonApiModel));
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "id");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "username");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "password");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "firstName");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "lastName");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "active");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "created");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "modified");
            __decorate([
                angular2_jsonapi_1.Attribute()
            ], User.prototype, "token");
            User = __decorate([
                angular2_jsonapi_1.JsonApiModelConfig({
                    type: 'user'
                })
            ], User);
            exports_3("User", User);
        }
    };
});
System.register("app/components/_models/project.DEPRECREATED", ["angular2-jsonapi"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var angular2_jsonapi_2, Project;
    return {
        setters: [
            function (angular2_jsonapi_2_1) {
                angular2_jsonapi_2 = angular2_jsonapi_2_1;
            }
        ],
        execute: function () {
            Project = (function (_super) {
                __extends(Project, _super);
                function Project() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Project;
            }(angular2_jsonapi_2.JsonApiModel));
            __decorate([
                angular2_jsonapi_2.Attribute()
            ], Project.prototype, "id");
            __decorate([
                angular2_jsonapi_2.Attribute()
            ], Project.prototype, "name");
            __decorate([
                angular2_jsonapi_2.Attribute()
            ], Project.prototype, "created");
            __decorate([
                angular2_jsonapi_2.Attribute()
            ], Project.prototype, "modified");
            __decorate([
                angular2_jsonapi_2.Attribute()
            ], Project.prototype, "token");
            Project = __decorate([
                angular2_jsonapi_2.JsonApiModelConfig({
                    type: 'projects'
                })
            ], Project);
            exports_4("Project", Project);
        }
    };
});
System.register("app/components/_models/index", ["app/components/_models/user", "app/components/_models/project.DEPRECREATED"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_5(exports);
    }
    return {
        setters: [
            function (user_1_1) {
                exportStar_1(user_1_1);
            },
            function (project_DEPRECREATED_1_1) {
                exportStar_1(project_DEPRECREATED_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/components/_services/user.service", ["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3, http_2, UserService;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (_2) {
            }
        ],
        execute: function () {
            /**
             * @name UserService
             *
             * UserService implements functionality to get all Users from the DB - this is purely to test API functionality
             */
            UserService = (function () {
                function UserService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                }
                UserService.prototype.getUsers = function () {
                    // add authorization header with jwt token - uses same authentication (Bearer) as CakePHP API is expecting
                    var headers = new http_2.Headers({ 'Accept': 'application/vnd.api+json', 'Authorization': 'Bearer ' + this.authService.token });
                    var options = new http_2.RequestOptions({ headers: headers });
                    // get users from api
                    return this.http.get('http://www.project.dev/users/', options)
                        .map(function (response) { return response.json(); });
                };
                return UserService;
            }());
            UserService = __decorate([
                core_3.Injectable()
            ], UserService);
            exports_6("UserService", UserService);
        }
    };
});
System.register("app/components/_services/datastore.service", ["@angular/core", "angular2-jsonapi", "app/components/_models/index"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4, angular2_jsonapi_3, index_1, DatastoreService;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (angular2_jsonapi_3_1) {
                angular2_jsonapi_3 = angular2_jsonapi_3_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            DatastoreService = (function (_super) {
                __extends(DatastoreService, _super);
                function DatastoreService(http) {
                    return _super.call(this, http) || this;
                }
                return DatastoreService;
            }(angular2_jsonapi_3.JsonApiDatastore));
            DatastoreService = __decorate([
                core_4.Injectable(),
                angular2_jsonapi_3.JsonApiDatastoreConfig({
                    baseUrl: 'http://www.project.dev/',
                    models: {
                        users: index_1.User,
                        projects: index_1.Project
                    }
                })
            ], DatastoreService);
            exports_7("DatastoreService", DatastoreService);
        }
    };
});
/**
 * Created by duncan on 16/03/2017.
 */
System.register("app/components/_services/index", ["app/components/_services/auth.service", "app/components/_services/user.service", "app/components/_services/datastore.service"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_8(exports);
    }
    return {
        setters: [
            function (auth_service_1_1) {
                exportStar_2(auth_service_1_1);
            },
            function (user_service_1_1) {
                exportStar_2(user_service_1_1);
            },
            function (datastore_service_1_1) {
                exportStar_2(datastore_service_1_1);
            }
        ],
        execute: function () {/**
             * Created by duncan on 16/03/2017.
             */
        }
    };
});
System.register("app/components/login/login.component", ["@angular/core"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5, LoginComponent;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            /**
             * @name LoginComponent
             *
             * Processes the user login form, and passes data to the auth service for logging the user in
             */
            LoginComponent = (function () {
                function LoginComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.model = {};
                    this.loading = false;
                    this.error = '';
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // reset login status
                    this.authService.logout();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.loading = true;
                    this.authService.login(this.model.username, this.model.password)
                        .subscribe(function (result) {
                        if (result === true) {
                            // login successful
                            _this.router.navigate(['/']);
                        }
                        else {
                            // login failed
                            _this.error = 'Username or password is incorrect';
                            _this.loading = false;
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent = __decorate([
                core_5.Component({
                    moduleId: module.id,
                    templateUrl: 'login.component.html'
                })
            ], LoginComponent);
            exports_9("LoginComponent", LoginComponent);
        }
    };
});
System.register("app/components/login/index", ["app/components/login/login.component"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_10(exports);
    }
    return {
        setters: [
            function (login_component_1_1) {
                exportStar_3(login_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/components/home/home.component", ["@angular/core"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_6, HomeComponent;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            }
        ],
        execute: function () {
            /**
             * @name HomeComponent
             *
             * Forms the first login page, the dashboard
             */
            HomeComponent = (function () {
                function HomeComponent(userService) {
                    this.userService = userService;
                    this.users = [];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get users from secure api end point
                    this.userService.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                    });
                };
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                core_6.Component({
                    moduleId: module.id,
                    templateUrl: 'home.component.html'
                })
            ], HomeComponent);
            exports_11("HomeComponent", HomeComponent);
        }
    };
});
/**
 * Created by duncan on 16/03/2017.
 */
System.register("app/components/home/index", ["app/components/home/home.component"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_12(exports);
    }
    return {
        setters: [
            function (home_component_1_1) {
                exportStar_4(home_component_1_1);
            }
        ],
        execute: function () {/**
             * Created by duncan on 16/03/2017.
             */
        }
    };
});
System.register("app/components/_guards/auth.guard", ["@angular/core"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_7, AuthGuard;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            }
        ],
        execute: function () {
            /**
             * @name AuthGuard
             *
             * Prevents unauthenticated users from accessing restricted areas of the application
             */
            AuthGuard = (function () {
                function AuthGuard(router) {
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    //Attemps to access the currentUser store within localstorage
                    if (localStorage.getItem('currentUser')) {
                        //currentUser was accessible, so return true (user is logged in)
                        return true;
                    }
                    //User isn't logged in, so change to login page and return false
                    this.router.navigate(['/login']);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard = __decorate([
                core_7.Injectable()
            ], AuthGuard);
            exports_13("AuthGuard", AuthGuard);
        }
    };
});
System.register("app/components/_guards/index", ["app/components/_guards/auth.guard"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_14(exports);
    }
    return {
        setters: [
            function (auth_guard_1_1) {
                exportStar_5(auth_guard_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/app.routing", ["@angular/router", "app/components/login/index", "app/components/home/index", "app/components/_guards/index"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var router_1, index_2, index_3, index_4, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            appRoutes = [
                {
                    path: 'login',
                    component: index_2.LoginComponent,
                    data: { title: 'Login' }
                },
                {
                    path: 'dashboard',
                    component: index_3.HomeComponent,
                    canActivate: [index_4.AuthGuard],
                    data: { title: 'Dashboard' }
                },
                // otherwise redirect to home
                { path: '**', redirectTo: 'dashboard' }
            ];
            exports_15("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
System.register("app/components/project/project-list.component", ["@angular/core"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_8, ProjectListComponent;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            }
        ],
        execute: function () {
            ProjectListComponent = (function () {
                function ProjectListComponent() {
                    this.message = '';
                    this.dtOptions = {};
                }
                ProjectListComponent.prototype.someClickHandler = function (info) {
                    this.message = info.id;
                };
                ProjectListComponent.prototype.ngOnInit = function () {
                    this.dtOptions = {
                        displayLength: 10,
                        paginationType: 'full_numbers'
                    };
                };
                return ProjectListComponent;
            }());
            ProjectListComponent = __decorate([
                core_8.Component({
                    moduleId: module.id,
                    templateUrl: 'project-list.component.html'
                })
            ], ProjectListComponent);
            exports_16("ProjectListComponent", ProjectListComponent);
        }
    };
});
System.register("app/shared/animations", ["@angular/core"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_9, slideInDownAnimation;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            }
        ],
        execute: function () {
            // Component transition animations
            exports_17("slideInDownAnimation", slideInDownAnimation = core_9.trigger('routeAnimation', [
                core_9.state('*', core_9.style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                core_9.transition(':enter', [
                    core_9.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_9.animate('0.2s ease-in')
                ]),
                core_9.transition(':leave', [
                    core_9.animate('0.5s ease-out', core_9.style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ])
            ]));
        }
    };
});
System.register("app/components/project/project.service", ["@angular/core", "angular2-jsonapi"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_10, angular2_jsonapi_4, Project, ProjectService;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (angular2_jsonapi_4_1) {
                angular2_jsonapi_4 = angular2_jsonapi_4_1;
            }
        ],
        execute: function () {
            Project = (function (_super) {
                __extends(Project, _super);
                function Project() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Project;
            }(angular2_jsonapi_4.JsonApiModel));
            __decorate([
                angular2_jsonapi_4.Attribute()
            ], Project.prototype, "id");
            __decorate([
                angular2_jsonapi_4.Attribute()
            ], Project.prototype, "name");
            __decorate([
                angular2_jsonapi_4.Attribute()
            ], Project.prototype, "status");
            Project = __decorate([
                angular2_jsonapi_4.JsonApiModelConfig({
                    type: 'projects'
                })
            ], Project);
            exports_18("Project", Project);
            ProjectService = (function () {
                //getProjects() { return projectsPromise; }
                /*getProject(id: string | string) {
                    return projectsPromise
                        .then(projects => projects.find(project => project.id === id));
                }*/
                function ProjectService(datastore) {
                    this.datastore = datastore;
                }
                ProjectService.prototype.getProjects = function () {
                    this.datastore.query(Project, {}).subscribe(function (projects) { return console.log(projects); });
                };
                ProjectService.prototype.getProject = function (id) {
                    this.datastore.findRecord(Project, id).subscribe(function (project) { return project; });
                };
                return ProjectService;
            }());
            ProjectService = __decorate([
                core_10.Injectable()
            ], ProjectService);
            exports_18("ProjectService", ProjectService);
        }
    };
});
System.register("app/components/project/project-detail.component", ["rxjs/add/operator/switchMap", "@angular/core", "app/shared/animations"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_11, animations_1, ProjectDetailComponent;
    return {
        setters: [
            function (_3) {
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            }
        ],
        execute: function () {
            ProjectDetailComponent = (function () {
                function ProjectDetailComponent(route, router, service) {
                    this.route = route;
                    this.router = router;
                    this.service = service;
                    this.routeAnimation = true;
                    this.display = 'block';
                    this.position = 'absolute';
                }
                ProjectDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .map(function (params) { return _this.service.getProject(params['id']); })
                        .subscribe(function (project) { return _this.project = project; });
                };
                ProjectDetailComponent.prototype.gotoProjects = function () {
                    var projectId = this.project ? this.project.id : null;
                    // Pass along the project id if available
                    // so that the ProjectList component can select that project.
                    // Include a junk 'foo' property for fun.
                    this.router.navigate(['/projects', { id: projectId }]);
                };
                return ProjectDetailComponent;
            }());
            __decorate([
                core_11.HostBinding('@routeAnimation')
            ], ProjectDetailComponent.prototype, "routeAnimation");
            __decorate([
                core_11.HostBinding('style.display')
            ], ProjectDetailComponent.prototype, "display");
            __decorate([
                core_11.HostBinding('style.position')
            ], ProjectDetailComponent.prototype, "position");
            ProjectDetailComponent = __decorate([
                core_11.Component({
                    templateUrl: './project-detail.component.html',
                    animations: [animations_1.slideInDownAnimation]
                })
            ], ProjectDetailComponent);
            exports_19("ProjectDetailComponent", ProjectDetailComponent);
        }
    };
});
System.register("app/components/project/projects-routing.module", ["@angular/core", "@angular/router", "app/components/project/project-list.component", "app/components/project/project-detail.component"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_12, router_2, project_list_component_1, project_detail_component_1, projectsRoutes, ProjectRoutingModule;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (project_list_component_1_1) {
                project_list_component_1 = project_list_component_1_1;
            },
            function (project_detail_component_1_1) {
                project_detail_component_1 = project_detail_component_1_1;
            }
        ],
        execute: function () {
            projectsRoutes = [
                { path: 'projects', component: project_list_component_1.ProjectListComponent },
                { path: 'project/:id', component: project_detail_component_1.ProjectDetailComponent }
            ];
            ProjectRoutingModule = (function () {
                function ProjectRoutingModule() {
                }
                return ProjectRoutingModule;
            }());
            ProjectRoutingModule = __decorate([
                core_12.NgModule({
                    imports: [
                        router_2.RouterModule.forChild(projectsRoutes)
                    ],
                    exports: [
                        router_2.RouterModule
                    ]
                })
            ], ProjectRoutingModule);
            exports_20("ProjectRoutingModule", ProjectRoutingModule);
        }
    };
});
System.register("app/components/project/projects.module", ["@angular/core", "@angular/common", "@angular/forms", "angular-datatables", "app/components/project/project-list.component", "app/components/project/project-detail.component", "app/components/project/project.service", "app/components/project/projects-routing.module"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_13, common_1, forms_1, angular_datatables_1, project_list_component_2, project_detail_component_2, project_service_1, projects_routing_module_1, ProjectsModule;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (angular_datatables_1_1) {
                angular_datatables_1 = angular_datatables_1_1;
            },
            function (project_list_component_2_1) {
                project_list_component_2 = project_list_component_2_1;
            },
            function (project_detail_component_2_1) {
                project_detail_component_2 = project_detail_component_2_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (projects_routing_module_1_1) {
                projects_routing_module_1 = projects_routing_module_1_1;
            }
        ],
        execute: function () {
            ProjectsModule = (function () {
                function ProjectsModule() {
                }
                return ProjectsModule;
            }());
            ProjectsModule = __decorate([
                core_13.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        angular_datatables_1.DataTablesModule,
                        projects_routing_module_1.ProjectRoutingModule
                    ],
                    declarations: [
                        project_list_component_2.ProjectListComponent,
                        project_detail_component_2.ProjectDetailComponent
                    ],
                    providers: [project_service_1.ProjectService]
                })
            ], ProjectsModule);
            exports_21("ProjectsModule", ProjectsModule);
        }
    };
});
System.register("app/shared/header/header.component", ["@angular/core"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_14, HeaderComponent;
    return {
        setters: [
            function (core_14_1) {
                core_14 = core_14_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_14.Component({
                    selector: 'pt-header',
                    templateUrl: "./headerView.html"
                })
            ], HeaderComponent);
            exports_22("HeaderComponent", HeaderComponent);
        }
    };
});
System.register("app/shared/navigation/navigation.component", ["@angular/core"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_15, NavigationComponent;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            }
        ],
        execute: function () {
            NavigationComponent = (function () {
                function NavigationComponent() {
                }
                return NavigationComponent;
            }());
            NavigationComponent = __decorate([
                core_15.Component({
                    selector: 'pt-navigation',
                    templateUrl: './navigationView.html'
                })
            ], NavigationComponent);
            exports_23("NavigationComponent", NavigationComponent);
        }
    };
});
System.register("app/app.module", ["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/http", "angular2-jsonapi", "@ng-bootstrap/ng-bootstrap", "angular-datatables", "app/app.component", "app/app.routing", "app/components/_guards/index", "app/components/_services/index", "app/components/login/index", "app/components/home/index", "app/components/project/projects.module", "app/shared/header/header.component", "app/shared/navigation/navigation.component"], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var platform_browser_1, core_16, forms_2, http_3, angular2_jsonapi_5, ng_bootstrap_1, angular_datatables_2, http_4, app_component_1, app_routing_1, index_5, index_6, index_7, index_8, projects_module_1, header_component_1, navigation_component_1, AppModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_16_1) {
                core_16 = core_16_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
                http_4 = http_3_1;
            },
            function (angular2_jsonapi_5_1) {
                angular2_jsonapi_5 = angular2_jsonapi_5_1;
            },
            function (ng_bootstrap_1_1) {
                ng_bootstrap_1 = ng_bootstrap_1_1;
            },
            function (angular_datatables_2_1) {
                angular_datatables_2 = angular_datatables_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            },
            function (index_6_1) {
                index_6 = index_6_1;
            },
            function (index_7_1) {
                index_7 = index_7_1;
            },
            function (index_8_1) {
                index_8 = index_8_1;
            },
            function (projects_module_1_1) {
                projects_module_1 = projects_module_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_16.NgModule({
                    //Our custom application components
                    declarations: [
                        app_component_1.AppComponent,
                        header_component_1.HeaderComponent,
                        navigation_component_1.NavigationComponent,
                        index_7.LoginComponent,
                        index_8.HomeComponent
                    ],
                    //External imports, reflected in the imports above
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_2.FormsModule,
                        http_3.HttpModule,
                        angular2_jsonapi_5.JsonApiModule,
                        ng_bootstrap_1.NgbModule.forRoot(),
                        angular_datatables_2.DataTablesModule,
                        app_routing_1.routing,
                        projects_module_1.ProjectsModule
                    ],
                    //Our custom services
                    providers: [
                        index_5.AuthGuard,
                        index_6.AuthService,
                        index_6.UserService,
                        index_6.DatastoreService,
                        //ToDo: remove once proper backend is implemented
                        /*fakeBackendProvider,
                        MockBackend,*/
                        http_4.BaseRequestOptions
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_24("AppModule", AppModule);
        }
    };
});
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
System.register("environments/environment", [], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var environment;
    return {
        setters: [],
        execute: function () {// The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            exports_25("environment", environment = {
                production: false
            });
        }
    };
});
System.register("main", ["@angular/core", "@angular/platform-browser-dynamic", "app/app.module", "environments/environment"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_17, platform_browser_dynamic_1, app_module_1, environment_1;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            if (environment_1.environment.production) {
                core_17.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    };
});
