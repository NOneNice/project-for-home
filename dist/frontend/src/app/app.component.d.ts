import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
export declare class AppComponent implements OnInit {
    private httpClient;
    name: string;
    departmentId: string;
    userList: User[];
    constructor(httpClient: HttpClient);
    ngOnInit(): void;
    OnCreate(): void;
}
