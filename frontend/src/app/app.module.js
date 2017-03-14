var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("environment", ["@angular/platform-browser", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, core_1, PROVIDERS, _decorateModuleRef, decorateModuleRef, ENV_PROVIDERS;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            // Environment Providers
            PROVIDERS = [];
            // Angular debug tools in the dev console
            // https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
            _decorateModuleRef = function (value) { return value; };
            if ('production' === ENV) {
                core_1.enableProdMode();
                // Production
                _decorateModuleRef = function (modRef) {
                    platform_browser_1.disableDebugTools();
                    return modRef;
                };
                PROVIDERS = PROVIDERS.slice();
            }
            else {
                _decorateModuleRef = function (modRef) {
                    var appRef = modRef.injector.get(core_1.ApplicationRef);
                    var cmpRef = appRef.components[0];
                    var _ng = window.ng;
                    platform_browser_1.enableDebugTools(cmpRef);
                    window.ng.probe = _ng.probe;
                    window.ng.coreTokens = _ng.coreTokens;
                    return modRef;
                };
                // Development
                PROVIDERS = PROVIDERS.slice();
            }
            exports_1("decorateModuleRef", decorateModuleRef = _decorateModuleRef);
            exports_1("ENV_PROVIDERS", ENV_PROVIDERS = PROVIDERS.slice());
        }
    };
});
System.register("app.service", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, AppState;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            AppState = (function () {
                function AppState() {
                    this._state = {};
                }
                Object.defineProperty(AppState.prototype, "state", {
                    // already return a clone of the current state
                    get: function () {
                        return this._state = this._clone(this._state);
                    },
                    // never allow mutation
                    set: function (value) {
                        throw new Error('do not mutate the `.state` directly');
                    },
                    enumerable: true,
                    configurable: true
                });
                AppState.prototype.get = function (prop) {
                    // use our state getter for the clone
                    var state = this.state;
                    return state.hasOwnProperty(prop) ? state[prop] : state;
                };
                AppState.prototype.set = function (prop, value) {
                    // internally mutate our state
                    return this._state[prop] = value;
                };
                AppState.prototype._clone = function (object) {
                    // simple object clone
                    return JSON.parse(JSON.stringify(object));
                };
                return AppState;
            }());
            AppState = __decorate([
                core_2.Injectable()
            ], AppState);
            exports_2("AppState", AppState);
        }
    };
});
System.register("home/title/title.service", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, Title;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            Title = (function () {
                function Title(http) {
                    this.http = http;
                    this.value = 'Angular 2';
                }
                Title.prototype.getData = function () {
                    console.log('Title#getData(): Get Data');
                    // return this.http.get('/assets/data.json')
                    // .map(res => res.json());
                    return {
                        value: 'AngularClass'
                    };
                };
                return Title;
            }());
            Title = __decorate([
                core_3.Injectable()
            ], Title);
            exports_3("Title", Title);
        }
    };
});
System.register("home/title/index", ["home/title/title.service"], function (exports_4, context_4) {
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
            function (title_service_1_1) {
                exportStar_1(title_service_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("home/x-large/x-large.directive", ["@angular/core"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, XLargeDirective;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            }
        ],
        execute: function () {
            XLargeDirective = (function () {
                function XLargeDirective(element, renderer) {
                    // simple DOM manipulation to set font size to x-large
                    // `nativeElement` is the direct reference to the DOM element
                    // element.nativeElement.style.fontSize = 'x-large';
                    this.element = element;
                    this.renderer = renderer;
                    // for server/webworker support use the renderer
                    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
                }
                return XLargeDirective;
            }());
            XLargeDirective = __decorate([
                core_4.Directive({
                    selector: '[x-large]' // using [ ] means selecting attributes
                })
            ], XLargeDirective);
            exports_5("XLargeDirective", XLargeDirective);
        }
    };
});
System.register("home/x-large/index", ["home/x-large/x-large.directive"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters: [
            function (x_large_directive_1_1) {
                exportStar_2(x_large_directive_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("home/home.component", ["@angular/core", "home/title/index"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, title_1, HomeComponent;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (title_1_1) {
                title_1 = title_1_1;
            }
        ],
        execute: function () {
            HomeComponent = (function () {
                // TypeScript public modifiers
                function HomeComponent(appState, title) {
                    this.appState = appState;
                    this.title = title;
                    // Set our default values
                    this.localState = { value: '' };
                }
                HomeComponent.prototype.ngOnInit = function () {
                    console.log('hello `Home` component');
                    // this.title.getData().subscribe(data => this.data = data);
                };
                HomeComponent.prototype.submitState = function (value) {
                    console.log('submitState', value);
                    this.appState.set('value', value);
                    this.localState.value = '';
                };
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                core_5.Component({
                    // The selector is what angular internally uses
                    // for `document.querySelectorAll(selector)` in our index.html
                    // where, in this case, selector is the string 'home'
                    selector: 'home',
                    // We need to tell Angular's Dependency Injection which providers are in our app.
                    providers: [
                        title_1.Title
                    ],
                    // Our list of styles in our component. We may add more to compose many styles together
                    styleUrls: ['./home.component.css'],
                    // Every Angular template is first compiled by the browser before Angular runs it's compiler
                    templateUrl: './home.component.html'
                })
            ], HomeComponent);
            exports_7("HomeComponent", HomeComponent);
        }
    };
});
System.register("home/index", ["home/home.component"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_8(exports);
    }
    return {
        setters: [
            function (home_component_1_1) {
                exportStar_3(home_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("about/about.component", ["@angular/core"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_6, AboutComponent;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            }
        ],
        execute: function () {
            AboutComponent = (function () {
                function AboutComponent(route) {
                    this.route = route;
                }
                AboutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route
                        .data
                        .subscribe(function (data) {
                        // your resolved data from route
                        _this.localState = data.yourData;
                    });
                    console.log('hello `About` component');
                    // static data that is bundled
                    // var mockData = require('assets/mock-data/mock-data.json');
                    // console.log('mockData', mockData);
                    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
                    this.asyncDataWithWebpack();
                };
                AboutComponent.prototype.asyncDataWithWebpack = function () {
                    var _this = this;
                    // you can also async load mock data with 'es6-promise-loader'
                    // you would do this if you don't want the mock-data bundled
                    // remember that 'es6-promise-loader' is a promise
                    setTimeout(function () {
                        System["import"]('../../assets/mock-data/mock-data.json')
                            .then(function (json) {
                            console.log('async mockData', json);
                            _this.localState = json;
                        });
                    });
                };
                return AboutComponent;
            }());
            AboutComponent = __decorate([
                core_6.Component({
                    selector: 'about',
                    styles: ["\n  "],
                    template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
                })
            ], AboutComponent);
            exports_9("AboutComponent", AboutComponent);
        }
    };
});
System.register("about/index", ["about/about.component"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_10(exports);
    }
    return {
        setters: [
            function (about_component_1_1) {
                exportStar_4(about_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("projects/projects.component", ["@angular/core"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7, AboutComponent;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            }
        ],
        execute: function () {
            AboutComponent = (function () {
                function AboutComponent(route) {
                    this.route = route;
                }
                AboutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route
                        .data
                        .subscribe(function (data) {
                        // your resolved data from route
                        _this.localState = data.yourData;
                    });
                    console.log('hello `About` component');
                    // static data that is bundled
                    // var mockData = require('assets/mock-data/mock-data.json');
                    // console.log('mockData', mockData);
                    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
                    this.asyncDataWithWebpack();
                };
                AboutComponent.prototype.asyncDataWithWebpack = function () {
                    var _this = this;
                    // you can also async load mock data with 'es6-promise-loader'
                    // you would do this if you don't want the mock-data bundled
                    // remember that 'es6-promise-loader' is a promise
                    setTimeout(function () {
                        System["import"]('../../assets/mock-data/mock-data.json')
                            .then(function (json) {
                            console.log('async mockData', json);
                            _this.localState = json;
                        });
                    });
                };
                return AboutComponent;
            }());
            AboutComponent = __decorate([
                core_7.Component({
                    selector: 'about',
                    styles: ["\n  "],
                    template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
                })
            ], AboutComponent);
            exports_11("AboutComponent", AboutComponent);
        }
    };
});
System.register("projects/index", ["projects/projects.component"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_12(exports);
    }
    return {
        setters: [
            function (projects_component_1_1) {
                exportStar_5(projects_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("no-content/no-content.component", ["@angular/core"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_8, NoContentComponent;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            }
        ],
        execute: function () {
            NoContentComponent = (function () {
                function NoContentComponent() {
                }
                return NoContentComponent;
            }());
            NoContentComponent = __decorate([
                core_8.Component({
                    selector: 'no-content',
                    template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
                })
            ], NoContentComponent);
            exports_13("NoContentComponent", NoContentComponent);
        }
    };
});
System.register("no-content/index", ["no-content/no-content.component"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function exportStar_6(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_14(exports);
    }
    return {
        setters: [
            function (no_content_component_1_1) {
                exportStar_6(no_content_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app.resolver", ["@angular/core", "rxjs/Observable", "rxjs/add/observable/of"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_9, Observable_1, DataResolver, APP_RESOLVER_PROVIDERS;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            DataResolver = (function () {
                function DataResolver() {
                }
                DataResolver.prototype.resolve = function (route, state) {
                    return Observable_1.Observable.of({ res: 'I am data' });
                };
                return DataResolver;
            }());
            DataResolver = __decorate([
                core_9.Injectable()
            ], DataResolver);
            exports_15("DataResolver", DataResolver);
            // an array of services to resolve routes with data
            exports_15("APP_RESOLVER_PROVIDERS", APP_RESOLVER_PROVIDERS = [
                DataResolver
            ]);
        }
    };
});
System.register("app.routes", ["home/index", "about/index", "no-content/index"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var home_1, about_1, no_content_1, ROUTES;
    return {
        setters: [
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (no_content_1_1) {
                no_content_1 = no_content_1_1;
            }
        ],
        execute: function () {
            exports_16("ROUTES", ROUTES = [
                { path: '', component: home_1.HomeComponent },
                { path: 'home', component: home_1.HomeComponent },
                { path: 'about', component: about_1.AboutComponent },
                { path: 'detail', loadChildren: './+detail#DetailModule' },
                { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
                { path: '**', component: no_content_1.NoContentComponent },
            ]);
        }
    };
});
System.register("app.component", ["@angular/core"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_10, AppComponent;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(appState) {
                    this.appState = appState;
                    this.angularclassLogo = 'assets/img/angularclass-avatar.png';
                    this.name = 'Project Tracker';
                    this.url = 'https://twitter.com/AngularClass';
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log('Initial App State', this.appState.state);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_10.Component({
                    selector: 'app',
                    encapsulation: core_10.ViewEncapsulation.None,
                    styleUrls: [
                        './app.component.css'
                    ],
                    template: "\n    <nav>\n      <a [routerLink]=\" ['./'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Index\n      </a>\n      <a [routerLink]=\" ['./home'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Home\n      </a>\n      <a [routerLink]=\" ['./detail'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Detail\n      </a>\n      <a [routerLink]=\" ['./barrel'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Barrel\n      </a>\n      <a [routerLink]=\" ['./about'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        About\n      </a>\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      <span>WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a></span>\n      <div>\n        <a [href]=\"url\">\n          <img [src]=\"angularclassLogo\" width=\"25%\">\n        </a>\n      </div>\n    </footer>\n  "
                })
            ], AppComponent);
            exports_17("AppComponent", AppComponent);
            /*
             * Please review the https://github.com/AngularClass/angular2-examples/ repo for
             * more angular app examples that you may copy/paste
             * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
             * For help or questions please contact us at @AngularClass on twitter
             * or our chat on Slack at https://AngularClass.com/slack-join
             */
        }
    };
});
System.register("app.module", ["@angular/platform-browser", "@angular/forms", "@angular/http", "@angular/core", "@angularclass/hmr", "@angular/router", "environment", "app.routes", "app.component", "app.resolver", "app.service", "home/index", "about/index", "no-content/index", "home/x-large/index", "../styles/styles.scss", "../styles/headings.css"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var platform_browser_2, forms_1, http_1, core_11, hmr_1, router_1, environment_1, app_routes_1, app_component_1, app_resolver_1, app_service_1, home_2, about_2, no_content_2, x_large_1, APP_PROVIDERS, AppModule;
    return {
        setters: [
            function (platform_browser_2_1) {
                platform_browser_2 = platform_browser_2_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (hmr_1_1) {
                hmr_1 = hmr_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_resolver_1_1) {
                app_resolver_1 = app_resolver_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (home_2_1) {
                home_2 = home_2_1;
            },
            function (about_2_1) {
                about_2 = about_2_1;
            },
            function (no_content_2_1) {
                no_content_2 = no_content_2_1;
            },
            function (x_large_1_1) {
                x_large_1 = x_large_1_1;
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            // Application wide providers
            APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
                app_service_1.AppState
            ]);
            AppModule = (function () {
                function AppModule(appRef, appState) {
                    this.appRef = appRef;
                    this.appState = appState;
                }
                AppModule.prototype.hmrOnInit = function (store) {
                    if (!store || !store.state) {
                        return;
                    }
                    console.log('HMR store', JSON.stringify(store, null, 2));
                    // set state
                    this.appState._state = store.state;
                    // set input values
                    if ('restoreInputValues' in store) {
                        var restoreInputValues = store.restoreInputValues;
                        setTimeout(restoreInputValues);
                    }
                    this.appRef.tick();
                    delete store.state;
                    delete store.restoreInputValues;
                };
                AppModule.prototype.hmrOnDestroy = function (store) {
                    var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
                    // save state
                    var state = this.appState._state;
                    store.state = state;
                    // recreate root elements
                    store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
                    // save input values
                    store.restoreInputValues = hmr_1.createInputTransfer();
                    // remove styles
                    hmr_1.removeNgStyles();
                };
                AppModule.prototype.hmrAfterDestroy = function (store) {
                    // display new elements
                    store.disposeOldHosts();
                    delete store.disposeOldHosts;
                };
                return AppModule;
            }());
            AppModule = __decorate([
                core_11.NgModule({
                    bootstrap: [app_component_1.AppComponent],
                    declarations: [
                        app_component_1.AppComponent,
                        about_2.AboutComponent,
                        home_2.HomeComponent,
                        no_content_2.NoContentComponent,
                        x_large_1.XLargeDirective
                    ],
                    imports: [
                        platform_browser_2.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })
                    ],
                    providers: [
                        environment_1.ENV_PROVIDERS,
                        APP_PROVIDERS
                    ]
                })
            ], AppModule);
            exports_18("AppModule", AppModule);
        }
    };
});
