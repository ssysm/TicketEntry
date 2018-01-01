import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {
  constructor(
    private ticketService:TicketService
  ) { }

  ticketType: String;
  tableType:Boolean;

  ticketForm: FormGroup;

  ngOnInit(
  ) {
    this.ticketForm = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      table: new FormControl('',[
        Validators.required
      ]),
      section:new FormControl('',[
        Validators.required
      ]),
      row:new FormControl('',[
        Validators.required
      ]),
      ticketNum:new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      uniqueTixNum:new FormControl('',[
        Validators.required
      ])
    })
  }

  changeTicketType(type){
    switch (type){
      case "table":
        this.ticketType = "桌票";
        this.tableType = true;
        break;
      case "seat":
        this.ticketType = "坐票";
        this.tableType = false;
        break;
    }
  }
  addTicket(data){
    this.ticketService.addTicket(data)
      .map(res=>res.json())
      .subscribe(
        data=>{
          alert("添加成功!")

        },
        error=> {
          alert("添加失败")
        })
  }

}
