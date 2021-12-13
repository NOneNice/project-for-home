import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";
import {RouterModule} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule

  ]
})
export class SecureModule { }
