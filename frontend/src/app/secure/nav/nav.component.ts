import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Emitters} from "../../emitters/emitters";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      user=>{
        this.user = user;
      });

  }

  logout(): void {
    this.authService.logout().subscribe(
      res => console.log(res)
    );
  }
}
