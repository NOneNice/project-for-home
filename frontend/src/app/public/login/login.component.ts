import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../public.component.scss']
})
export class LoginComponent implements OnInit {

  from: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.from = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.authService.login(this.from.getRawValue())
      .subscribe(()=> this.router.navigate(['/']));
  }
}
