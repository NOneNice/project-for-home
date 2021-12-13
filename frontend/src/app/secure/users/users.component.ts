import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {MatTableDataSource} from "@angular/material/table";
import {Role} from "../../interfaces/role";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  colums= ['ID','name','email','dep','role','deleted']
  users: User[] = [];
  role: Role[]=[];
  dataSource = new MatTableDataSource()

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.all().subscribe(
      users=>{
        this.dataSource.data = users;
      });
    console.log(this.dataSource)
  }

  onRemove() {

  }
}
