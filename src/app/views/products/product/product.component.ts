import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: ProductType;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private router: Router) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: '',
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['id']) {
        this.productService.getProduct(+params['id']).subscribe({
          next: (data: ProductType) => {
            this.product = data
            localStorage.removeItem('teaProduct')
            localStorage.setItem('teaProduct', this.product.title)
          },
          error: (error) => {
            this.router.navigate(['/'])
          }
        });
      }
    })
  }

}
