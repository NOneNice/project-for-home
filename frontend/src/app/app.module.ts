import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavComponent } from './secure/nav/nav.component';
import { MenuComponent } from './secure/menu/menu.component';
import {PublicModule} from "./public/public.module";
import {SecureModule} from "./secure/secure.module";
import {RouterModule} from "@angular/router";
import {CredentialInterceptor} from "./interceptor/credential.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PublicModule,
    SecureModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: CredentialInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
