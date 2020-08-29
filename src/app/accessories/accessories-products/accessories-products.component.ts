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
  isLoading = false;
  files: File[] = [];
  quantityInputOldValue = '1';
  quantityDisabled = false;
  selectedElementIndex = 0;
  url = this.urlService.url;
  productsArray: Accessorie[] = [];
  isAddingNew = false;
  placeHolderAccessorie: Accessorie = {
    createdAt: null,
    description: '',
    id: '',
    imageURL: [],
    isAvailable: false,
    name: '',
    ordersThisMonth: 0,
    price: 0,
    totalOrders: 0,
    updatedAt: null,
    availableQuantity: Infinity
  };

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

  infinityQuantityClicked() {
    this.quantityDisabled = this.getSelectedAccessorie().availableQuantity === Infinity;
    const quantityInput = (document.getElementById('product-quantity') as HTMLInputElement);
    if (this.quantityDisabled) {
      document.getElementById('product-quantity').removeAttribute('disabled');
      quantityInput.type = 'number';
      quantityInput.value = this.quantityInputOldValue;
      const oldValue = this.quantityInputOldValue ? +this.quantityInputOldValue : 1;
      this.form.get('prodQuantity').setValue(oldValue);
      this.getSelectedAccessorie().availableQuantity = oldValue;
    } else {
      this.quantityInputOldValue = quantityInput.value;
      quantityInput.type = 'text';
      this.form.get('prodQuantity').setValue(Infinity);
      this.getSelectedAccessorie().availableQuantity = Infinity;
      quantityInput.value = 'Infinite';
      quantityInput.setAttribute('disabled', 'true');
    }
  }

  isInfiniteSelectedQuantity() {
    return this.getSelectedAccessorie().availableQuantity > 99999999;
  }

  setInfinite() {
    const quantityInput = (document.getElementById('product-quantity') as HTMLInputElement);
    quantityInput.type = 'text';
    quantityInput.value = 'Infinite';
    quantityInput.setAttribute('disabled', 'true');
  }

  manageEnableDisable() {
    this.clearFiles();
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
    if (!this.isAddingNew) {
      return this.productsArray[this.selectedElementIndex];
    } else {
      return this.placeHolderAccessorie;
    }
  }

  clearForm() {
    this.form.reset();
  }


  clearFiles() {
    this.files = [];
  }

  // these two function are related to the image upload

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
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
    this.isLoading = true;
    this.httpRequests.updateAccessorie(this.getSelectedAccessorie().id, this.form.value, this.files).subscribe(() => {
      this.isLoading = false;
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
        this.toaster.success('Product edited', 'Done');
      }
    }, () => {
      this.isLoading = false;
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

  // this function is listening to an event fired from /assets/js/scripts/ui/data-list-view.js
  // it is fired when "Add New" button is clicked , because the button is written in javascript
  listenToAddNew() {
    document.addEventListener('add-new-clicked', () => {
      this.selectedElementIndex = -1;
      this.isAddingNew = true;
      this.quantityInputOldValue = '1';
      this.clearFiles();
      this.clearForm();
    });
  }

  addNewAccessorie() {
    this.isLoading = true;
    this.httpRequests.addAccessorie(this.form.value, this.files).subscribe(() => {
      this.isLoading = false;
      this.toaster.success('reload to see new accessories', 'Done');
    }, () => {
      this.toaster.error('Unable to add new accessories', 'Error :');
      this.isLoading = false;
    });
  }
}
