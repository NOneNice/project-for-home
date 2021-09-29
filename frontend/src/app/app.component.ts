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
  User$: Observable<User>=this.getNames();

  title = 'frontend';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {     }

  getNames():Observable<User>{
    return this.http.get<User>('http://localhost:5000/users').pipe(share());
  }

}
