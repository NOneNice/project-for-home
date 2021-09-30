import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'frontend';
  public UserList: User[]
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
  }


  ngOnInit(): void {
    this.httpClient.get<User[]>('http://localhost:5000/users')
      .subscribe(UserList=>{
        this.UserList = UserList;
      })
  }

}
