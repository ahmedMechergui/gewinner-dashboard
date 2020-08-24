import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {OrdersListManagementService} from '../../orders-list-management.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AccessoriesRequestHttpService} from '../accessories-request-http.service';
import {Accessorie} from '../../shared/models/accessorie.model';
import {HostUrlService} from '../../shared/services/host-url.service';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-accessories-products',
  templateUrl: './accessories-products.component.html',
  styleUrls: ['./accessories-products.component.css']
})
export class AccessoriesProductsComponent implements OnInit {
  form: FormGroup;
  files: File[] = [];
  quantityInputOldValue: string;
  quantityDisabled = false;
  selectedElementIndex = 0;
  url = this.urlService.url;
  productsArray: Accessorie[] = [];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService,
    private httpRequests: AccessoriesRequestHttpService,
    private urlService: HostUrlService,
    private toaster: ToastService) {
  }

  /*===========================
  # App logic methods
    ===========================*/

  ngOnInit(): void {
    this.fetchAccessories();
    this.listenToAddNew();
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.ordersListManagementService.setOrdersArray(this.productsArray);
  }

  initForm(): void {
    this.form = new FormGroup({
      prodName: new FormControl(null),
      prodDescription: new FormControl(null),
      prodPrice: new FormControl(null),
      prodQuantity: new FormControl(null)
    });
  }

  setFormValues(): void {
    const accessorie = this.getSelectedAccessorie();
    this.form.patchValue({
      prodName: accessorie.name,
      prodDescription: accessorie.description,
      prodPrice: accessorie.price,
      prodQuantity: accessorie.availableQuantity
    });
  }

  onSubmit(): void {
    if (this.quantityDisabled) {
      this.form.patchValue({prodQuantity: Infinity});
    } else {
      const quantity = (document.getElementById('product-quantity') as HTMLInputElement).value;
      this.form.patchValue({prodQuantity: quantity});
    }
    const values = this.form.value;
    console.log(this.form.value);
    // this.productsArray.push({
    //   name: values.prodName,
    //   imageURL: '/assets/images/elements/no-image.jpg',
    //   description: values.prodDescription,
    //   price: values.prodPrice,
    //   available: values.prodQuantity,
    //   totalOrders: 0,
    //   ordersThisMonth: 0,
    // });
  }

  infinityQuantityClicked() {
    this.quantityDisabled = this.getSelectedAccessorie().availableQuantity === Infinity;
    const quantityInput = (document.getElementById('product-quantity') as HTMLInputElement);
    if (this.quantityDisabled) {
      document.getElementById('product-quantity').removeAttribute('disabled');
      quantityInput.type = 'number';
      quantityInput.value = this.quantityInputOldValue;
      const oldValue = this.quantityInputOldValue ? +this.quantityInputOldValue : 1;
      this.form.get('prodQuantity').setValue(oldValue);
      this.productsArray[this.selectedElementIndex].availableQuantity = oldValue;
    } else {
      this.quantityInputOldValue = quantityInput.value;
      quantityInput.type = 'text';
      this.form.get('prodQuantity').setValue(Infinity);
      this.productsArray[this.selectedElementIndex].availableQuantity = Infinity;
      quantityInput.value = 'Infinite';
      quantityInput.setAttribute('disabled', 'true');
    }
  }

  isInfiniteSelectedQuantity() {
    return this.getSelectedAccessorie().availableQuantity > 99999999;
  }

  manageEnableDisable() {
    this.setFormValues();
    const isInfinite = this.getSelectedAccessorie().availableQuantity > 99999999;
    if (isInfinite) {
      document.getElementById('product-quantity').setAttribute('disabled', 'true');
    } else {
      document.getElementById('product-quantity').removeAttribute('disabled');
    }
    return isInfinite;
  }

  getSelectedAccessorie(): Accessorie {
    return this.productsArray[this.selectedElementIndex];
  }

  clearForm() {
    this.form.reset();
  }


  // these two function are related to the image upload

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

// ======================================

  /*===========================
 # Http requests methods
   ===========================*/

  fetchAccessories(): void {
    this.httpRequests.getAllAccessories().subscribe((res: Accessorie[]) => {
      this.productsArray = res.slice().reverse();
      this.initForm();
      this.nullToInfinity();
    }, () => {
      this.toaster.error('Unable to fetch accessories', 'Error :');
    });
  }

  // for some reason , "infinity" values are stored as "null"
  // so we need to convert them back to infinity
  nullToInfinity() {
    this.productsArray.forEach(accessorie => {
      if (accessorie.availableQuantity === null) {
        accessorie.availableQuantity = Infinity;
      }
    });
  }

  updateAccessorie(): void {
    this.httpRequests.updateAccessorie(this.getSelectedAccessorie().id, this.form.value, this.files).subscribe(() => {
      const value = this.form.value;
      // this is just for the user to see the changes instantly
      // code looks stupid but other ways are complicated
      this.productsArray[this.selectedElementIndex].name = value.prodName;
      this.productsArray[this.selectedElementIndex].description = value.prodDescription;
      this.productsArray[this.selectedElementIndex].price = value.prodPrice;
      this.productsArray[this.selectedElementIndex].availableQuantity = value.prodQuantity;

      if (this.files.length > 0) {
        this.toaster.success('reload page to see the full changes', 'Product edited');
      } else {
        this.toaster.success('Product edited', '');
      }
    }, () => {
      this.toaster.error('Unable to edit Product', 'Error :');
    });
  }

  deleteAccessorie() {
    this.httpRequests.deleteAccessorie(this.getSelectedAccessorie().id).subscribe(() => {
      this.productsArray.splice(this.selectedElementIndex, 1);
    }, () => {
      this.toaster.error('Unable to delete accessorie', 'Error :');
    });
  }

  listenToAddNew() {
    document.addEventListener('add-new-clicked', () => {
      this.selectedElementIndex = -1;
      this.clearForm();
    });
  }
}
