var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("app.service", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AppState;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Injectable()
            ], AppState);
            exports_1("AppState", AppState);
        }
    };
});
System.register("app.component", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, AppComponent;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
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
                core_2.Component({
                    selector: 'app',
                    encapsulation: core_2.ViewEncapsulation.None,
                    styleUrls: [
                        './app.component.css'
                    ],
                    template: "\n    <nav>\n      <a [routerLink]=\" ['./'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Index\n      </a>\n      <a [routerLink]=\" ['./home'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Home\n      </a>\n      <a [routerLink]=\" ['./detail'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Detail\n      </a>\n      <a [routerLink]=\" ['./barrel'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Barrel\n      </a>\n      <a [routerLink]=\" ['./about'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        About\n      </a>\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      <span>WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a></span>\n      <div>\n        <a [href]=\"url\">\n          <img [src]=\"angularclassLogo\" width=\"25%\">\n        </a>\n      </div>\n    </footer>\n  "
                })
            ], AppComponent);
            exports_2("AppComponent", AppComponent);
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
System.register("app.component.spec", ["@angular/core", "@angular/core/testing", "app.component", "app.service"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, testing_1, app_component_1, app_service_1;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            describe("App", function () {
                var comp;
                var fixture;
                // async beforeEach
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [app_component_1.AppComponent],
                        schemas: [core_3.NO_ERRORS_SCHEMA],
                        providers: [app_service_1.AppState]
                    })
                        .compileComponents(); // compile template and css
                }));
                // synchronous beforeEach
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    comp = fixture.componentInstance;
                    fixture.detectChanges(); // trigger initial data binding
                });
                it("should be readly initialized", function () {
                    expect(fixture).toBeDefined();
                    expect(comp).toBeDefined();
                });
                it("should be @AngularClass", function () {
                    expect(comp.url).toEqual('https://twitter.com/AngularClass');
                    expect(comp.angularclassLogo).toEqual('assets/img/angularclass-avatar.png');
                    expect(comp.name).toEqual('Angular 2 Webpack Starter');
                });
                it('should log ngOnInit', function () {
                    spyOn(console, 'log');
                    expect(console.log).not.toHaveBeenCalled();
                    comp.ngOnInit();
                    expect(console.log).toHaveBeenCalled();
                });
            });
        }
    };
});
