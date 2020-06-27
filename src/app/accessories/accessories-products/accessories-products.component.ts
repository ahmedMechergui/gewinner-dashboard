import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-accessories-products',
  templateUrl: './accessories-products.component.html',
  styleUrls: ['./accessories-products.component.css']
})
export class AccessoriesProductsComponent implements OnInit {
  form: FormGroup;
  files: File[] = [];
  quantityDisabled = false;
  selectedElementIndex: number;
  productsArray = [
    {
      imageURL: '/assets/images/elements/camera.jpg',
      name: 'Front HQ camera',
      price: 257,
      totalOrders: 78,
      ordersThisMonth: 17,
      available: Infinity
    },
    {
      imageURL: '/assets/images/elements/adjustable table.jpg',
      name: 'Adjustable table',
      price: 182,
      totalOrders: 48,
      ordersThisMonth: 22,
      available: 18
    },
    {
      imageURL: '/assets/images/elements/headrest.jpg',
      name: 'Headrest neck support',
      price: 135,
      totalOrders: 34,
      ordersThisMonth: 0,
      available: 0
    },
    {
      imageURL: '/assets/images/elements/security-belt.jpg',
      name: 'Security belt',
      price: 70,
      totalOrders: 120,
      ordersThisMonth: 30,
      available: 7
    },

    {
      imageURL: '/assets/images/elements/camera.jpg',
      name: 'Front HQ camera',
      price: 257,
      totalOrders: 78,
      ordersThisMonth: 17,
      available: Infinity
    },
    {
      imageURL: '/assets/images/elements/adjustable table.jpg',
      name: 'Adjustable table',
      price: 182,
      totalOrders: 48,
      ordersThisMonth: 22,
      available: 18
    },
    {
      imageURL: '/assets/images/elements/headrest.jpg',
      name: 'Headrest neck support',
      price: 135,
      totalOrders: 34,
      ordersThisMonth: 0,
      available: 0
    },
    {
      imageURL: '/assets/images/elements/security-belt.jpg',
      name: 'Security belt',
      price: 70,
      totalOrders: 120,
      ordersThisMonth: 30,
      available: 7
    },
    {
      imageURL: '/assets/images/elements/camera.jpg',
      name: 'Front HQ camera',
      price: 257,
      totalOrders: 78,
      ordersThisMonth: 17,
      available: Infinity
    },
    {
      imageURL: '/assets/images/elements/adjustable table.jpg',
      name: 'Adjustable table',
      price: 182,
      totalOrders: 48,
      ordersThisMonth: 22,
      available: 18
    },
    {
      imageURL: '/assets/images/elements/headrest.jpg',
      name: 'Headrest neck support',
      price: 135,
      totalOrders: 34,
      ordersThisMonth: 0,
      available: 0
    },
    {
      imageURL: '/assets/images/elements/security-belt.jpg',
      name: 'Security belt',
      price: 70,
      totalOrders: 120,
      ordersThisMonth: 30,
      available: 7
    },
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.productsArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.productsArray);
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      prodName: new FormControl(null),
      prodDescription: new FormControl(null),
      prodPrice: new FormControl(null),
      prodQuantity: new FormControl(null),
      prodImages: new FormControl(null)
    });
  }

  onSubmit(): void {
    if (this.quantityDisabled) {
      this.form.patchValue({prodQuantity: Infinity});
    } else {
      const quantity = (document.getElementById('product-quantity') as HTMLInputElement).value;
      // this.form.get('prodQuantity').setValue(quantity);
      this.form.patchValue({prodQuantity: quantity});
    }
    console.log(this.form.value);
  }

  infinityQuantityClicked() {
    if (this.quantityDisabled) {
      document.getElementById('product-quantity').removeAttribute('disabled');
    } else {
      document.getElementById('product-quantity').setAttribute('disabled', 'true');
    }
    this.quantityDisabled = !this.quantityDisabled;
  }


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
