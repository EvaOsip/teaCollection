import {Component, Input} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product: ProductType;
  constructor() {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: '',
    }
  }
}
