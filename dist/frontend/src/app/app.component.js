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
        this.nameDep = '';
        this.isCollapsed = true;
        this.isCollapsedDep = true;
        this.title = 'frontend';
        this.httpClient = httpClient;
    }
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }
    toggleCollapseDep() {
        this.isCollapsedDep = !this.isCollapsedDep;
    }
    ngOnInit() {
        this.httpClient.get('http://localhost:5000/users')
            .subscribe(UserList => {
            this.UserList = UserList;
        });
        this.httpClient.get('http://localhost:5000/departments')
            .subscribe(DepartmenList => {
            this.DepartmenList = DepartmenList;
        });
    }
    onCreat() {
        if (this.name && this.departmentId)
            this.httpClient.post('http://localhost:5000/users', {
                name: this.name,
                departmentId: this.departmentId
            })
                .subscribe(User => {
                this.UserList.push(User);
                this.name = '';
                this.departmentId = '';
            });
    }
    onCreatDep() {
        if (this.nameDep)
            this.httpClient.post('http://localhost:5000/departments', {
                name: this.nameDep
            })
                .subscribe(Departmen => {
                this.DepartmenList.push(Departmen);
                this.nameDep = '';
            });
    }
    onRemove(UserDeleted) {
        this.httpClient.delete('http://localhost:5000/users/' + UserDeleted.id).subscribe(() => {
            this.UserList = this.UserList.filter(User => User.id !== UserDeleted.id);
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