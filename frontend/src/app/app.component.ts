import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {share} from "rxjs/operators";
import {Departmen} from "./departmen";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed : boolean = true;
  isCollapsedDep : boolean = true;
  title = 'frontend';
  public UserList: User[]
  public DepartmenList: Departmen[]
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
  }
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleCollapseDep(){
    this.isCollapsedDep = !this.isCollapsedDep;
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('http://localhost:5000/users')
      .subscribe(UserList=>{
        this.UserList = UserList;
      })
    this.httpClient.get<Departmen[]>('http://localhost:5000/departments')
      .subscribe(DepartmenList =>{
        this.DepartmenList = DepartmenList;
      })
  }

}
