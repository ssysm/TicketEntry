import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketService } from './ticket.service';
import {HttpModule, BrowserXhr} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { GuardService } from './auth/guard.service';
import {Cros} from "./cros";


@NgModule({
  declarations: [
    AppComponent,
    TicketManagementComponent,
    TicketAddComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TicketService, AuthService, GuardService,{
    provide: BrowserXhr,
    useClass:Cros
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
