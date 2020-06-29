import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../list-view-loader.service';
import {OrdersListManagementService} from '../orders-list-management.service';

@Component({
  selector: 'app-job-internship-request',
  templateUrl: './job-internship-request.component.html',
  styleUrls: ['./job-internship-request.component.css']
})
export class JobInternshipRequestComponent implements OnInit {


  selectedElementIndex = 0;
  requestsArray = [
    {
      post: 'internship',
      name: 'John Doe',
      applyDate: new Date('2020-7-23'),
      status: 'pending',
      interviewDate: null,
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'job',
      name: 'Mark Doe',
      applyDate: new Date('2020-7-20'),
      status: 'scheduled',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'internship',
      name: 'Jack Doe',
      applyDate: new Date('2020-6-13'),
      status: 'processed',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'internship',
      name: 'John Doe',
      applyDate: new Date('2020-7-23'),
      status: 'pending',
      interviewDate: null,
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'job',
      name: 'Mark Doe',
      applyDate: new Date('2020-7-20'),
      status: 'scheduled',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'internship',
      name: 'Jack Doe',
      applyDate: new Date('2020-6-13'),
      status: 'processed',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'internship',
      name: 'John Doe',
      applyDate: new Date('2020-7-23'),
      status: 'pending',
      interviewDate: null,
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'job',
      name: 'Mark Doe',
      applyDate: new Date('2020-7-20'),
      status: 'scheduled',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    },
    {
      post: 'internship',
      name: 'Jack Doe',
      applyDate: new Date('2020-6-13'),
      status: 'processed',
      interviewDate: new Date('2020-7-22'),
      cvURl: 'https://www.docdroid.net/qP6Oxiu/cv-pdf'
    }
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.requestsArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.requestsArray);
  }

  setScheduledDate(dateElement: HTMLInputElement): void {
    console.log(dateElement.value);
    if (dateElement.value) {
      this.requestsArray[this.selectedElementIndex].interviewDate = new Date(dateElement.value);
      this.requestsArray[this.selectedElementIndex].status = 'scheduled';
    } else {
      this.requestsArray[this.selectedElementIndex].interviewDate = null;
      this.requestsArray[this.selectedElementIndex].status = 'pending';
    }
    // send request to server
    dateElement.value = null;
  }


}
