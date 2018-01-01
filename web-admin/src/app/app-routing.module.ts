import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketManagementComponent} from "./ticket-management/ticket-management.component";
import {TicketAddComponent} from "./ticket-add/ticket-add.component";


const routes: Routes = [
  {
    path:'ticket',
    children:[
      {
        path:'',
        component:TicketAddComponent
      },
      {
        path:'management',
        component:TicketManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
