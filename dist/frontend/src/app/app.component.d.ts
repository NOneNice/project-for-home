import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
export declare class AppComponent implements OnInit {
    private httpClient;
    title: string;
    UserList: User[];
    constructor(httpClient: HttpClient);
    ngOnInit(): void;
}
