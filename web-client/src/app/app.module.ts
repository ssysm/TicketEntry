import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {TicketService} from "./ticket.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { LookupComponent } from './lookup/lookup.component';
import {RouterModule} from "@angular/router";
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LookupComponent,
    SearchComponent
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
      },
      {
        path:'search',
        component:SearchComponent
      }
    ])
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
