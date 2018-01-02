import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {environment} from "../environments/environment";
@Injectable()
export class TicketService {

  constructor(
    private http:Http
  ) { }

  filterTicket(data){
    return this.http
      .get(environment.apiBase+'/api/ticket/filter/'+data)
  }

  addTicket(data){
    return this.http
      .post(environment.apiBase+'/api/ticket',data)
  }

  updateTicket(data){
    return this.http
      .patch(environment.apiBase+'/api/ticket/update',{
        tixNum:data.tixNum,
        newName:data.newName
      })
  }

  deleteTicket(tixNum){
    return this.http
      .delete(environment.apiBase+'/api/ticket/delete/'+tixNum)
  }

}
