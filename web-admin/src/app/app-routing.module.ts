import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketManagementComponent} from "./ticket-management/ticket-management.component";
import {TicketAddComponent} from "./ticket-add/ticket-add.component";
import {GuardService} from "./auth/guard.service";
import {AuthComponent} from "./auth/auth.component";


const routes: Routes = [
  {
    path:'ticket',
    children:[
      {
        path:'',
        component:TicketAddComponent,
        canActivate:[GuardService]
      },
      {
        path:'management',
        component:TicketManagementComponent,
        canActivate:[GuardService]
      }
    ]
  },
  {
    path:'login',
    component:AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
