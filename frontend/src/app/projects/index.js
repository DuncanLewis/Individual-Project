var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("projects.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AboutComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Component({
                    selector: 'about',
                    styles: ["\n  "],
                    template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
                })
            ], AboutComponent);
            exports_1("AboutComponent", AboutComponent);
        }
    };
});
System.register("index", ["projects.component"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_2(exports);
    }
    return {
        setters: [
            function (projects_component_1_1) {
                exportStar_1(projects_component_1_1);
            }
        ],
        execute: function () {
        }
    };
});
