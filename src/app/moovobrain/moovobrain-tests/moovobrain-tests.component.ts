import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';

@Component({
  selector: 'app-moovobrain-tests',
  templateUrl: './moovobrain-tests.component.html',
  styleUrls: ['./moovobrain-tests.component.css']
})
export class MoovobrainTestsComponent implements OnInit {


  selectedElementIndex: number;
  testsArray = [
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-23'), status: 'pending', scheduledDate: null},
    // tslint:disable-next-line:max-line-length
    {
      name: 'Moovobrain',
      client: 'individual',
      requestDate: new Date('2020-7-22'),
      status: 'scheduled',
      scheduledDate: new Date('2020-8-23')
    },
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-18'), status: 'tested', scheduledDate: new Date('2020-7-23')},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-13'), status: 'tested', scheduledDate: new Date('2020-7-23')},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-10'), status: 'rejected', scheduledDate: null},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-23'), status: 'pending', scheduledDate: null},
    // tslint:disable-next-line:max-line-length
    {
      name: 'Moovobrain',
      client: 'individual',
      requestDate: new Date('2020-7-22'),
      status: 'scheduled',
      scheduledDate: new Date('2020-8-23')
    },
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-18'), status: 'tested', scheduledDate: new Date('2020-7-23')},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-13'), status: 'tested', scheduledDate: new Date('2020-7-23')},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-10'), status: 'rejected', scheduledDate: null},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-23'), status: 'pending', scheduledDate: null},
    // tslint:disable-next-line:max-line-length
    {
      name: 'Moovobrain',
      client: 'individual',
      requestDate: new Date('2020-7-22'),
      status: 'scheduled',
      scheduledDate: new Date('2020-8-23')
    },
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-18'), status: 'tested', scheduledDate: new Date('2020-7-23')},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-10'), status: 'rejected', scheduledDate: null},
    {name: 'Moovobrain', client: 'individual', requestDate: new Date('2020-7-13'), status: 'tested', scheduledDate: new Date('2020-7-23')}
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.testsArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.testsArray);
  }

  setScheduledDate(dateElement: HTMLInputElement): void {
    console.log(dateElement.value);
    if (dateElement.value) {
      this.testsArray[this.selectedElementIndex].scheduledDate = new Date(dateElement.value);
      this.testsArray[this.selectedElementIndex].status = 'scheduled';
    } else {
      this.testsArray[this.selectedElementIndex].scheduledDate = null;
      this.testsArray[this.selectedElementIndex].status = 'pending';
    }
    // send request to server
    dateElement.value = null;
  }


}
