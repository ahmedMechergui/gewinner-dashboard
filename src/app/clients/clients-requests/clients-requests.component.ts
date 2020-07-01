import { Component, OnInit } from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';

@Component({
  selector: 'app-clients-requests',
  templateUrl: './clients-requests.component.html',
  styleUrls: ['./clients-requests.component.css']
})
export class ClientsRequestsComponent implements OnInit {

  selectedElementIndex: number;
  ordersArray = [
    {type: 'Quality control', client: 'Ahmed Mechergui', date : new Date('2020-7-23'), status: 'pending'},
    {type: 'Training session', client: 'John Doe', date : new Date('2020-7-22'), status: 'pending'},
    {type: 'Quality control', client: 'Mark Doe', date : new Date('2020-7-21'), status: 'processed'},
    {type: 'Maintenance', client: 'Jessika Doe', date : new Date('2020-7-21'), status: 'rejected'},
    {type: 'Quality control', client: 'Ahmed Mechergui', date : new Date('2020-7-23'), status: 'pending'},
    {type: 'Training session', client: 'John Doe', date : new Date('2020-7-22'), status: 'pending'},
    {type: 'Quality control', client: 'Mark Doe', date : new Date('2020-7-21'), status: 'processed'},
    {type: 'Maintenance', client: 'Jessika Doe', date : new Date('2020-7-21'), status: 'rejected'},
    {type: 'Quality control', client: 'Ahmed Mechergui', date : new Date('2020-7-23'), status: 'pending'},
    {type: 'Training session', client: 'John Doe', date : new Date('2020-7-22'), status: 'pending'},
    {type: 'Maintenance', client: 'Mark Doe', date : new Date('2020-7-21'), status: 'processed'},
    {type: 'Training session', client: 'Jessika Doe', date : new Date('2020-7-21'), status: 'rejected'},
    {type: 'Quality control', client: 'Ahmed Mechergui', date : new Date('2020-7-23'), status: 'pending'},
    {type: 'Training session', client: 'John Doe', date : new Date('2020-7-22'), status: 'pending'},
    {type: 'Quality control', client: 'Mark Doe', date : new Date('2020-7-21'), status: 'processed'},
    {type: 'Maintenance', client: 'Jessika Doe', date : new Date('2020-7-21'), status: 'rejected'}
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
