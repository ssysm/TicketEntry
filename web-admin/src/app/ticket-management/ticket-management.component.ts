import { Component, OnInit } from '@angular/core';
import {TicketService} from "../ticket.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
declare var jQuery: any;
declare var swal: any;
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {

  tableArr: Array<any> = [];
  seatArr: Array<any> = [];

  displayTable:Boolean = true;

  public newName: string;
  public apiBase:string = environment.apiBase;

  constructor(
    private tixService:TicketService,
    private route:Router
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
          '已删除',
          'success'
        );
        jQuery(".ticket-"+i).remove();
      },error=>{
        swal(
          '删除失败',
          '请刷新页面获取最新数据',
          'error'
        )
      })
  }

  showEditBox(tixNum,oName){
    jQuery('#ticket-'+tixNum+'-edit').val(this.newName);
    jQuery('#ticket-'+tixNum+'-edit').show();
    jQuery('#ticket-'+tixNum+'-name').hide();
    jQuery('#ticket-'+tixNum+'-bEdit').hide();
    jQuery('#ticket-'+tixNum+'-aEdit').show();
  }

  resetEdit(tixNum){
    jQuery('#ticket-'+tixNum+'-edit').hide();
    jQuery('#ticket-'+tixNum+'-name').show();
    jQuery('#ticket-'+tixNum+'-bEdit').show();
    jQuery('#ticket-'+tixNum+'-aEdit').hide();
  }

  editTicket(i){
    i.newName = jQuery('#ticket-'+i.tixNum+'-newName').val();
    this.tixService.updateTicket(i)
      .map(res => res.json())
      .subscribe(data=>{
        swal(
          '更新成功',
          '更新完毕',
          'success'
        );
        jQuery('#ticket-'+i.tixNum+'-name').text(i.newName);
        jQuery('#ticket-'+i.tixNum+'-edit').hide();
        jQuery('#ticket-'+i.tixNum+'-name').show();
        jQuery('#ticket-'+i.tixNum+'-bEdit').show();
        jQuery('#ticket-'+i.tixNum+'-aEdit').hide();
      })
  }

  changeDisplayTable(t:Boolean){
    this.displayTable = t;
  }

}
