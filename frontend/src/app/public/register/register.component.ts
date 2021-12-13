import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:'',
      email:'',
      password:'',
      password_confirm: ''
    })
  }

  submit() : void {
    console.log(this.form.getRawValue());

    this.authService.register(this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
}
