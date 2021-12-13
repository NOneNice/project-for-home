import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {Role} from "../interfaces/role";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = '';
  constructor(private httpClient: HttpClient) {}

  all(): Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:5000/api/users');
  }

  GetAllRole():Observable<Role[]>{
    return this.httpClient.get<Role[]>('http://localhost:5000/api/role');
  }

}


