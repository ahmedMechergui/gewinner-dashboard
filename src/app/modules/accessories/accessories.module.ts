import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import {AccessoriesComponent} from '../../accessories/accessories.component';
import {AccessoriesProductsComponent} from '../../accessories/accessories-products/accessories-products.component';
import {AccessoriesOrdersComponent} from '../../accessories/accessories-orders/accessories-orders.component';


@NgModule({
  declarations: [
    AccessoriesComponent,
    AccessoriesProductsComponent,
    AccessoriesOrdersComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ]
})
export class AccessoriesModule { }
