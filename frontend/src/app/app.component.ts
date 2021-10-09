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
  public name = '';
  public departmentId = '';
  public nameDep = '';
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
  onCreat(): void{
    if (this.name && this.departmentId)
    this.httpClient.post<User>('http://localhost:5000/users',
      {
            name : this.name,
            departmentId : this.departmentId
      } )
      .subscribe(User=>{
        this.UserList.push(User);
        this.name = '';
        this.departmentId = '';
      })
  }

  onCreatDep(): void{
    if (this.nameDep)
      this.httpClient.post<Departmen>('http://localhost:5000/departments',
        {
          name : this.nameDep
        } )
        .subscribe(Departmen=>{
          this.DepartmenList.push(Departmen);
          this.nameDep = '';
        })
  }

  onRemove(UserDeleted : User){
      this.httpClient.delete<void>(
        'http://localhost:5000/users/' + UserDeleted.id
      ).subscribe(() => {
        this.UserList = this.UserList.filter(User => User.id !== UserDeleted.id);
      })
  }
}
