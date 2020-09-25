import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';
import {MoovobrainRequestHttpService} from '../moovobrain-request-http.service';
import {MoovobrainOrder} from '../../shared/models/moovobrain-order.model';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-moovobrain-orders',
  templateUrl: './moovobrain-orders.component.html',
  styleUrls: ['./moovobrain-orders.component.css']
})
export class MoovobrainOrdersComponent implements OnInit {
  selectedElementIndex = 0;
  ordersArray: MoovobrainOrder[] = [];
  // we provide this variable when the column is not specified
  none = 'not specified';


  constructor(
    private listViewLoaderService: ListViewLoaderService,
    private toaster: ToastService,
    public ordersListManagementService: OrdersListManagementService,
    private httpRequest: MoovobrainRequestHttpService) {
  }

  ngOnInit(): void {
    this.fetchOrders();
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.ordersArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.ordersArray);
  }

  getSelectedOrder(): MoovobrainOrder {
    return this.ordersArray[this.selectedElementIndex];
  }


  /*========================
    # HTTP requests
   =========================*/

  fetchOrders() {
    this.httpRequest.getAllOrders().subscribe((orders: MoovobrainOrder[]) => {
      this.ordersArray = orders.reverse();
    }, () => {
      this.toaster.error('Unable to fetch orders', 'Error :');
    });
  }

  updateOrderStatus(status: string) {
    this.httpRequest.updateOrderStatus(this.getSelectedOrder().id, status).subscribe(() => {
      this.toaster.success('Order status updated', 'Done');
      this.getSelectedOrder().status = status;
    }, () => {
      this.toaster.error('Unable to update order status', 'Error :');
    });
  }

  deleteOrder() {
    this.httpRequest.deleteOrder(this.getSelectedOrder().id).subscribe(() => {
      this.toaster.success('Order deleted', 'Done');
      this.ordersArray.splice(this.selectedElementIndex, 1);
    }, () => {
      this.toaster.error('Unable to delete order', 'Error :');
    });
  }
}