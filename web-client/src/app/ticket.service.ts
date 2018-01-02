import {Injectable, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class TicketService implements OnInit{

  constructor(
    private http:Http
  ) { }

  ngOnInit(){

  }

  findTix(TixNum){
    return this.http
      .post(environment.apiBase+'/api/ticket/single',TixNum)
  }

}
