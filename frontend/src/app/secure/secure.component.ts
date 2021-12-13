import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Emitters} from "../emitters/emitters";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      user=> {
        Emitters.authEmitter.emit(user);
      }, () => {
        Emitters.authEmitter.emit();
        this.router.navigate(['/login']);
      });
  }
}
