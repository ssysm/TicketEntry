import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import { Router} from "@angular/router";

declare var swal:any;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    private authService: AuthService,
    private route : Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      uname: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
  }

  logIn(f){
      this.authService.login(f)
        .map(res=>res.json())
        .subscribe(data=>{
            if(data.success !== true){
              swal(
                '错误',
                'error',
                'error'
              )
            }else{
              localStorage.setItem('loggedIn','true');
              this.route.navigate(['/'])
            }
        },error=>{
          
        })
  }


}
