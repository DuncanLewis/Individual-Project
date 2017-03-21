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
System.register("_services/auth.service", ["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, AuthService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Injectable()
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    };
});
System.register("_models/user", ["angular2-jsonapi"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("User", User);
        }
    };
});
System.register("_models/project.DEPRECREATED", ["angular2-jsonapi"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
            exports_3("Project", Project);
        }
    };
});
System.register("_models/index", ["_models/user", "_models/project.DEPRECREATED"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
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
System.register("_services/user.service", ["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_2, http_2, UserService;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
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
                core_2.Injectable()
            ], UserService);
            exports_5("UserService", UserService);
        }
    };
});
System.register("_services/datastore.service", ["@angular/core", "angular2-jsonapi", "_models/index"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3, angular2_jsonapi_3, index_1, DatastoreService;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
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
                core_3.Injectable(),
                angular2_jsonapi_3.JsonApiDatastoreConfig({
                    baseUrl: 'http://www.project.dev/',
                    models: {
                        users: index_1.User,
                        projects: index_1.Project
                    }
                })
            ], DatastoreService);
            exports_6("DatastoreService", DatastoreService);
        }
    };
});
/**
 * Created by duncan on 16/03/2017.
 */
System.register("_services/index", ["_services/auth.service", "_services/user.service", "_services/datastore.service"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_7(exports);
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
System.register("home/home.component", ["@angular/core"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, HomeComponent;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
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
                core_4.Component({
                    moduleId: module.id,
                    templateUrl: 'home.component.html'
                })
            ], HomeComponent);
            exports_8("HomeComponent", HomeComponent);
        }
    };
});
