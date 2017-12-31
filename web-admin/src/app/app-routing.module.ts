import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketManagementComponent} from "./ticket-management/ticket-management.component";


const routes: Routes = [
  {
    path:'ticket',
    component:TicketManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
