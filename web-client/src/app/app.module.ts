import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {TicketService} from "./ticket.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { LookupComponent } from './lookup/lookup.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'lookup',
        component:LookupComponent
      }
    ])
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
