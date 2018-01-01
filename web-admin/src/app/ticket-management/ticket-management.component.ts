import { Component, OnInit } from '@angular/core';
import {TicketService} from "../ticket.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var swal: any;

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {

  tableArr: Array<any> = [];
  seatArr: Array<any> = [];

  displayTable:Boolean;

  constructor(
    private tixService:TicketService
  ){

  }

  ngOnInit(){
    this.get1stTable();
    this.getSeat();
  }

  get1stTable(){
    this.tixService.filterTicket('table')
      .map(res=>res.json())
      .subscribe(data=>{
        this.tableArr = data
      })
  }

  getSeat(){
    this.tixService.filterTicket('notable')
      .map(res=>res.json())
      .subscribe(data=>{
        this.seatArr = data
      })
  }

  deleteTix(i){
    this.tixService.deleteTicket(i)
      .subscribe(data=>{
        swal(
          '删除成功',
          '已删除,请刷新查看最新数据',
          'success'
        )
      },error=>{
        swal(
          '删除失败',
          '请刷新页面获取最新数据',
          'error'
        )
      })
  }

  changeDisplayTable(t:Boolean){
    this.displayTable = t;
  }

}
