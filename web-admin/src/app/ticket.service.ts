import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {environment} from "../environments/environment";
@Injectable()
export class TicketService {

  constructor(
    private http:Http
  ) { }

  getTicket(){
    return this.http
      .get(environment.apiBase+'/api/ticket')
  }

  addTicket(data){
    return this.http
      .post(environment.apiBase+'/api/ticket',data)
  }

}
