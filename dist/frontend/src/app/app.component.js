"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let AppComponent = class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.name = '';
        this.departmentId = '';
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.httpClient.get('http://localhost:5000/users')
            .subscribe(userList => {
            this.userList = userList;
        });
    }
    OnCreate() {
        this.httpClient.post('http://localhost:5000/users', {
            name: this.name,
            departmentId: this.departmentId
        })
            .subscribe(user => {
            this.userList.push(user);
            this.name = '';
            this.departmentId = '';
        });
    }
};
AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map