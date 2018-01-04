import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from "../../environments/environment";
@Injectable()
export class AuthService {

  constructor(
    private http : Http
  ) { }

  login(v){
    return this.http.post(environment.apiBase+'/api/users/login',v)
  }

}
