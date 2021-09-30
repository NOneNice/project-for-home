import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Departmen } from "./departmen";
export declare class AppComponent implements OnInit {
    private httpClient;
    isCollapsed: boolean;
    isCollapsedDep: boolean;
    title: string;
    UserList: User[];
    DepartmenList: Departmen[];
    constructor(httpClient: HttpClient);
    toggleCollapse(): void;
    toggleCollapseDep(): void;
    ngOnInit(): void;
}
