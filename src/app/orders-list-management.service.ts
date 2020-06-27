import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersListManagementService {

  constructor() {
  }

  ordersArray: Array<any>;

  // orders array must be set before performing any operation
  setOrdersArray(ordersArray): void {
    this.ordersArray = ordersArray;
  }

  deleteOrder(selectedElementIndex): void {
    this.ordersArray.splice(selectedElementIndex, 1);
    document.getElementById('order-' + selectedElementIndex);
    // send delete request to server
  }

  setOrderConfirmed(selectedElementIndex): void {
    this.ordersArray[selectedElementIndex].status = 'delivered';
    //  send update to server
  }

  setOrderRejected(selectedElementIndex): void {
    this.ordersArray[selectedElementIndex].status = 'rejected';
    //  send update to server
  }

  // this function will return the ID's of the selected orders
  getSelectedOrdersIDs(): Array<number> {
    const elements = document.getElementsByClassName('selected');
    const ordersIndexesArray = new Array();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      ordersIndexesArray.push(+elements[i].id.replace('order-', ''));
    }
    return ordersIndexesArray.sort().reverse();
  }

  deleteSelectedOrders(): void {
    const ordersIndexes = this.getSelectedOrdersIDs();
    ordersIndexes.forEach((orderIndex) => {
      this.ordersArray.splice(orderIndex, 1);
    });
    // send update request to server
  }

  confirmSelectedOrders(): void {
    const ordersIndexes = this.getSelectedOrdersIDs();
    ordersIndexes.forEach((orderIndex) => {
      this.ordersArray[orderIndex].status = 'delivered';
    });
  }

  rejectSelectedOrders(): void {
    const ordersIndexes = this.getSelectedOrdersIDs();
    ordersIndexes.forEach((orderIndex) => {
      this.ordersArray[orderIndex].status = 'rejected';
    });
  }
}
