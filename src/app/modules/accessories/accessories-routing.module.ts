import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessoriesComponent} from '../../accessories/accessories.component';


const routes: Routes = [
  {path : '' , component : AccessoriesComponent , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesRoutingModule { }
