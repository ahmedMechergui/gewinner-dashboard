import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';
import {ClientRequestsHttpService} from '../client-requests-http.service';
import {ServiceRequest} from '../../shared/models/service-request.model';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-clients-requests',
  templateUrl: './clients-requests.component.html',
  styleUrls: ['./clients-requests.component.css']
})
export class ClientsRequestsComponent implements OnInit {

  selectedElementIndex = 0;
  servicesArray: ServiceRequest[] = [
    // {type: 'Quality control', client: 'Ahmed Mechergui', date: new Date('2020-7-23'), status: 'pending'},
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService,
    private httpRequest: ClientRequestsHttpService,
    private toaster: ToastService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.servicesArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.servicesArray);
    this.servicesArray = this.httpRequest.serviceRequestsArray;
    this.httpRequest.getAllServiceRequests();
  }

  getSelectedElement() {
    return this.servicesArray[this.selectedElementIndex];
  }

  /*==================
    Http requests
    ==================*/

  changeStatus(status: string) {
    switch (this.getSelectedElement().type) {
      case 'Training session' :
        this.changeStatusTrainingSession(status);
        break;
      case 'Maintenance' :
        this.changeMaintenanceStatus(status === 'validated' ? 'fixed' : 'rejected');
        break;
      case 'Quality control' :
        this.changeQualityControlStatus(status);
        break;
    }
  }

  changeStatusTrainingSession(status: string) {
    this.httpRequest.changeStatusTrainingSession(this.getSelectedElement().id, status).subscribe(() => {
      this.getSelectedElement().status = status;
      this.toaster.success('Service request updated', 'Done');
    }, () => {
      this.toaster.error('Unable to perform updates', 'Error :');
    });
  }

  changeMaintenanceStatus(status: string) {
    this.httpRequest.changeStatusMaintenance(this.getSelectedElement().id, status).subscribe(() => {
      this.getSelectedElement().status = status;
      this.toaster.success('Service request updated', 'Done');
    }, () => {
      this.toaster.error('Unable to perform updates', 'Error :');
    });
  }

  changeQualityControlStatus(status: string) {
    this.httpRequest.changeQualityControlStatus(this.getSelectedElement().id, status).subscribe(() => {
      this.toaster.success('Service request updated', 'Done');
      this.getSelectedElement().status = status;
    }, () => {
      this.toaster.error('Unable to perform updates', 'Error :');
    });
  }

  deleteServiceRequest() {
    this.httpRequest.deleteServiceRequest(this.getSelectedElement().id,
      this.getSelectedElement().type).subscribe(() => {
      this.servicesArray.splice(this.selectedElementIndex, 1);
      this.toaster.success('Service request deleted', 'Done');
    }, () => {
      this.toaster.error('Unable to delete service request', 'Error :');
    });
  }

}
