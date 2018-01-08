import { Component, OnInit } from '@angular/core';
import {TicketService} from  '../ticket.service';
declare var jQuery: any;
declare var swal: any;
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  constructor(
    private tixService:TicketService
  ) { }

  found:Boolean;
  res: Object;

  ngOnInit(){

  };

  lookUp(value){
    console.log(value)
    this.tixService.findTix(value)
      .map(res => res.json())
      .subscribe(data=>{
        console.log(data);
        this.res = data;
        this.found = data.found;
      })
  }

  checkIn(value:string){
    this.tixService.checkIn(value)
      .map(res => res.json())
      .subscribe(data=>{
          if(data.success == true){
            swal(
              '已入场',
              '通讯成功',
              'success'
            )
          }else{
            swal(
              '无法入场',
              '系统错误',
              'error'
            )
          }
      },error=>{
        swal(
          '未知错误',
          'Unknown Error',
          'error'
        )
      })
  }

}
