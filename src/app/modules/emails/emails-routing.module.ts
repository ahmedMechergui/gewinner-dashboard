import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailsComponent} from '../../emails/emails.component';


const routes: Routes = [
  {path : '' , component : EmailsComponent , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
