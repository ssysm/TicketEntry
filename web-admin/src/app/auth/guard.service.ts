import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class GuardService {

  constructor(
    protected route: Router
  ) { }

  canActivate(){
    if(localStorage.getItem('loggedIn')!=="true"){
      this.route.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }

}
