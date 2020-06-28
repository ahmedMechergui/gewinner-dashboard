import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';

@Component({
  selector: 'app-moovobrain-orders',
  templateUrl: './moovobrain-orders.component.html',
  styleUrls: ['./moovobrain-orders.component.css']
})
export class MoovobrainOrdersComponent implements OnInit {

  selectedElementIndex: number;
  ordersArray = [
    {name: 'Moovobrain', client: 'individual', date : new Date('2020-7-23'), status: 'pending', price: 16500},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-7-4'), status: 'delivered', price: 20100},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-6-3'), status: 'rejected', price: 21900},
    {name: 'Moovobrain', client: 'Individual', date : new Date('2020-6-3'), status: 'delivered', price: 19000},
    {name: 'Moovobrain', client: 'individual', date : new Date('2020-7-23'), status: 'pending', price: 16500},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-7-4'), status: 'delivered', price: 20100},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-6-3'), status: 'rejected', price: 21900},
    {name: 'Moovobrain', client: 'Individual', date : new Date('2020-6-3'), status: 'delivered', price: 19000},
    {name: 'Moovobrain', client: 'individual', date : new Date('2020-7-23'), status: 'pending', price: 16500},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-7-4'), status: 'delivered', price: 20100},
    {name: 'Moovobrain', client: 'organization', date : new Date('2020-6-3'), status: 'rejected', price: 21900},
    {name: 'Moovobrain', client: 'Individual', date : new Date('2020-6-3'), status: 'delivered', price: 19000},
    {name: 'Moovobrain', client: 'individual', date: new Date('2020-7-23'), status: 'pending', price: 16500},
    {name: 'Moovobrain', client: 'organization', date: new Date('2020-7-4'), status: 'delivered', price: 20100},
    {name: 'Moovobrain', client: 'organization', date: new Date('2020-6-3'), status: 'rejected', price: 21900},
    {name: 'Moovobrain', client: 'Individual', date: new Date('2020-6-3'), status: 'delivered', price: 19000}
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
