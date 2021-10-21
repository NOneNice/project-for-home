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
const Chart_js_1 = require("Chart.js");
var NameDeaprt = [], GetDepartId = [], GetUserName = [], GetUserId = [];
async function getData() {
    const DepUrl = "http://localhost:5000/departments";
    const Url = "http://localhost:5000/users";
    const dep = await fetch(Url);
    const resdep = await fetch(DepUrl);
    const barChartData = await dep.json();
    const barChartDataDep = await resdep.json();
    const UserName = barChartData.map((x) => x.name);
    const UserId = barChartData.map((x) => x.departmentId);
    const nameDep = barChartDataDep.map((x) => x.name);
    const GetDepart = barChartDataDep.map((x) => x.Depart);
    const DepartId = GetDepart.map((y) => y.departmentId);
    console.log(UserName, UserId);
    NameDeaprt = nameDep;
    GetDepartId = GetDepart;
    GetUserName = UserName;
    GetUserId = UserId;
}
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
        if (!this.isCollapsedDep) {
            this.isCollapsedDep = !this.isCollapsedDep;
        }
    }
    toggleCollapseDep() {
        this.isCollapsedDep = !this.isCollapsedDep;
        if (!this.isCollapsed) {
            this.isCollapsed = !this.isCollapsed;
        }
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
        async function NameChart() {
            await getData();
            var arrays = GetDepartId;
            var length = arrays.map(function (array) {
                return array.length;
            });
            const canvas = document.getElementById('myChart');
            const canvas2 = document.getElementById('myChart2');
            const ctx = canvas.getContext('2d');
            if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
                throw new Error('Failed to get 2 context');
            }
            let chart = new Chart_js_1.Chart(canvas, {
                type: 'pie',
                data: {
                    labels: NameDeaprt,
                    datasets: [{
                            spanGaps: true,
                            label: 'Работник в отделе №',
                            data: length,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3
                        },
                    ],
                },
                options: {
                    title: {
                        text: "Сколько людей работают в отделах",
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                }
            });
            let chart2 = new Chart_js_1.Chart(canvas2, {
                type: 'pie',
                data: {
                    labels: GetUserName,
                    datasets: [{
                            data: GetUserId,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 3
                        },
                    ],
                },
                options: {
                    title: {
                        text: "Работники",
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                }
            });
        }
        NameChart();
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
    onRemoveDep(DepDeleted) {
        this.httpClient.delete('http://localhost:5000/departments/' + DepDeleted.id).subscribe(() => {
            this.DepartmenList = this.DepartmenList.filter(Department => Department.id !== DepDeleted.id);
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