import { Component } from '@angular/core';
import {TicketService} from "./ticket.service";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private tixService:TicketService
  ){

  }

}
