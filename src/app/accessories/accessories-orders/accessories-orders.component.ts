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
    {name: 'Headrest neck support', quantity: 2, date: new Date('2020-7-23'), client: 'individual', status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', date: new Date('2020-7-22'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', date: new Date('2020-7-21'), status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', date: new Date('2020-7-21'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'individual', date: new Date('2020-7-20'), status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', date: new Date('2020-7-19'), status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', date: new Date('2020-7-19'), status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', date: new Date('2020-7-18'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', date: new Date('2020-7-18'), status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', date: new Date('2020-7-18'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', date: new Date('2020-7-17'), status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', date: new Date('2020-7-12'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', date: new Date('2020-7-12'), status: 'delivered', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', date: new Date('2020-7-23'), status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', date: new Date('2020-7-19'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 45, client: 'organization', date: new Date('2020-7-20'), status: 'pending', price: 265},
    {name: 'Headrest neck support', quantity: 2, client: 'organization', date: new Date('2020-7-20'), status: 'pending', price: 265},
    {name: 'adjustable table', quantity: 56, client: 'organization', date: new Date('2020-7-21'), status: 'delivered', price: 265},
    {name: 'rear-view mirror', quantity: 3, client: 'individual', date: new Date('2020-7-21'), status: 'rejected', price: 265},
    {name: 'security belt', quantity: 5, client: 'organization', date: new Date('2020-7-22'), status: 'delivered', price: 265},
    {name: 'Headrest neck support', quantity: 1, client: 'individual', date: new Date('2020-7-22'), status: 'delivered', price: 265},
    {name: 'Camera', quantity: 12, client: 'organization', date: new Date('2020-7-23'), status: 'pending', price: 265}
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
