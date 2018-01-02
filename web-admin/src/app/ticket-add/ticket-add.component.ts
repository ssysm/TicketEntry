import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../ticket.service";
declare var swal: any;
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
  checkboxValue:boolean;
  formClickReset: Boolean = false;

  public section:string;
  public row:string;
  public ticketAmount:number;
  public name:string;
  public ticketNum:string;
  public email:string;


  public ticketArr: Array<any> = [];

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
      ]),
      ticketAmount:new FormControl('',[
        Validators.required,
        Validators.pattern("^\\d+$")
      ]),
      tableDisplay:new FormControl('',[
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$")
      ])
    })
  }

  resetFormBox(){
    this.formClickReset = this.checkboxValue;
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

  arrData(data){
    this.ticketArr = [];
    var startTixNum:number = parseInt(data.ticketAmount)-1;
    if(this.tableType){
      for(var i = 0;startTixNum > i;i++){
        this.ticketArr.push( {
          position: {
            table: this.tableType,
            section: data.section,
            row: data.row,
            sectionNum: parseInt(data.ticketNum+i)
          },
          ticketNum: parseInt(data.ticketNum+i),
          name: data.name
        })
      }
    }else{
      for(var i = 0;startTixNum+1 > i;i++){
        this.ticketArr.push({
          position: {
            table: this.tableType,
            section: data.section,
            row: data.row,
            sectionNum: parseInt(data.ticketNum+i)
          },
          ticketNum: data.section+data.row+parseInt(data.ticketNum+i),
          name: data.name
        })
      }
    }
    return this.ticketArr;
  }

  addTicket(data){

    this.ticketService.addTicket({tixArr:this.arrData(data)})
      .map(res=>res.json())
      .subscribe(
        data=>{
          swal(
            '添加成功',
            '已添加',
            'success'
          )

        },
        error=> {
          swal(
            '添加失败',
            '数据库有可能出现了已有的统一查询编号,请重新输入',
            'error'
          )
        })

    if(this.formClickReset){
      this.ticketForm.reset();
    }
  }


}
