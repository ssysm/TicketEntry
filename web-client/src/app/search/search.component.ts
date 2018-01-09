import { Component, OnInit } from '@angular/core';
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private tixService: TicketService
  ) { }

  ngOnInit() {
  }

  res:Array<any>;

  lookupByName(name:string){
    this.tixService.findName(name)
      .map(res => res.json())
      .subscribe(data=>{
        this.res = data.response;
      })
  }

}
