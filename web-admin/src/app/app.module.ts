import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketService } from './ticket.service';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TicketAddComponent } from './ticket-add/ticket-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketManagementComponent,
    TicketAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
