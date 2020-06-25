import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import {AccessoriesComponent} from '../../accessories/accessories.component';


@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ]
})
export class AccessoriesModule { }
