import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';

@Component({
  selector: 'app-accessories-orders',
  templateUrl: './accessories-orders.component.html',
  styleUrls: ['./accessories-orders.component.css']
})
export class AccessoriesOrdersComponent implements OnInit {
  selectedElementIndex: number;
  ordersArray = [
    {name: 'Headrest neck support', quantity: 2, client: 'individual', status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'individual', status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', status: 'pending', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', status: 'pending', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'individual', status: 'rejected', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'individual', status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', status: 'pending', price: 265}
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.ordersArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.ordersArray);
  }



}
