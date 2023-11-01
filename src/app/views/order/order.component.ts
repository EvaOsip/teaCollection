import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";
import {OrderResponseType} from "../../../types/order-response.type";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  orderInputs = new FormGroup({
    firstNameIndex: new FormControl('', [Validators.pattern('^[А-Яа-я][а-яё]*$'), Validators.required]),
    lastNameIndex: new FormControl('', [Validators.pattern('^[А-Яа-я][а-яё]*$'), Validators.required]),
    phoneIndex: new FormControl('', [Validators.pattern('^[+]?([0-9]{12})$'), Validators.required]),
    countryIndex: new FormControl('', Validators.required),
    zipIndex: new FormControl('', [Validators.pattern('^[0-9]{6}$'), Validators.required]),
    addressIndex: new FormControl('', [Validators.required, Validators.pattern('[\\s0-9А-Яа-я-/]*')]),
    productIndex: new FormControl(''),
    commentIndex: new FormControl(''),
  })
  private subscriptionOrder: Subscription | null = null;
  private data: OrderResponseType | {} = {};
  responseSuccess: boolean = false;
  form: boolean = true;


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    const productTitle: string | null = localStorage.getItem('teaProduct')
    if (productTitle) {
      this.productIndex?.setValue(productTitle)
    }
  }

  get firstNameIndex() {
    return this.orderInputs.get('firstNameIndex')
  }

  get lastNameIndex() {
    return this.orderInputs.get('lastNameIndex')
  }

  get phoneIndex() {
    return this.orderInputs.get('phoneIndex')
  }

  get countryIndex() {
    return this.orderInputs.get('countryIndex')
  }

  get zipIndex() {
    return this.orderInputs.get('zipIndex')
  }

  get addressIndex() {
    return this.orderInputs.get('addressIndex')
  }

  get productIndex() {
    return this.orderInputs.get('productIndex')
  }

  get commentIndex() {
    return this.orderInputs.get('commentIndex')
  }

  ngOnDestroy(): void {
    this.subscriptionOrder?.unsubscribe()
  }

  createOrder(): void {
    this.data = {
      name: this.firstNameIndex?.value,
      last_name: this.lastNameIndex?.value,
      phone: this.phoneIndex?.value,
      country: this.countryIndex?.value,
      zip: this.zipIndex?.value,
      product: this.addressIndex?.value,
      address: this.productIndex?.value,
      comment: this.commentIndex?.value
    };
    this.subscriptionOrder = this.productService.createOrder((this.data as OrderResponseType))
      .subscribe({
        next: (response: {success: number, message?: string}) => {
          if (response.success === 1 && !response.message) {
            this.form = false;
            const orderTitle = document.querySelector('.order-title')
            if (orderTitle) {
              orderTitle.innerHTML = 'Спасибо за заказ!'
            }
          } else if (response.success === 0 && response.message) {
            this.responseSuccess = true;
            setTimeout(() => {
              this.responseSuccess = false;
            }, 3000);

          }
        },
        error: (error) => {
          console.log(error)
          this.responseSuccess = true
        }
      })

  }

}
