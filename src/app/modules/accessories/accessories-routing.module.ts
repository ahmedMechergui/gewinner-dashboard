import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessoriesOrdersComponent} from '../../accessories/accessories-orders/accessories-orders.component';
import {AccessoriesProductsComponent} from '../../accessories/accessories-products/accessories-products.component';


const routes: Routes = [
  {path: ''  , redirectTo : 'orders' , pathMatch : 'full'},
  {path: 'orders', component: AccessoriesOrdersComponent},
  {path: 'products', component: AccessoriesProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesRoutingModule {
}
