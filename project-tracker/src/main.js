var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
                    this.title = 'Project Tracker';
                    this.tiles = [
                        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
                        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
                        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
                        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
                    ];
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
System.register("app/app.module", ["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/http", "@angular/material", "app/app.component"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var platform_browser_1, core_2, forms_1, http_1, material_1, app_component_1, AppModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_2.NgModule({
                    declarations: [
                        app_component_1.AppComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        material_1.MaterialModule
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_2("AppModule", AppModule);
        }
    };
});
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
System.register("environments/environment", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var environment;
    return {
        setters: [],
        execute: function () {// The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            exports_3("environment", environment = {
                production: false
            });
        }
    };
});
System.register("main", ["@angular/core", "@angular/platform-browser-dynamic", "app/app.module", "environments/environment"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, platform_browser_dynamic_1, app_module_1, environment_1;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
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
                core_3.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    };
});
