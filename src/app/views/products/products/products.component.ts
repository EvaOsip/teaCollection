import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductType[];
  loading: boolean = false;
  subject: string | null;
  private subscriptionParams: Subscription | null = null;
  private subscription: Subscription | null = null;


  constructor(private productService: ProductService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.subject = null
    this.products = [];
  }

  ngOnInit() {
    sessionStorage.setItem('param', 'true');
    this.loading = true;
    const searchTitle: HTMLInputElement | null = document.getElementById('search-title') as HTMLInputElement;
    this.subscriptionParams = this.activatedRoute.queryParams.subscribe((params: Params) => {

      this.subject = params['search'];
      if (this.subject) {
        this.subscription = this.productService.searchTea(this.subject)
          .subscribe({
            next: (data) => {
              this.loading = false;
              const productsAfterSearch: ProductType[] = [];
              if(data.length === 0) {
                searchTitle.innerText = 'Ничего не найдено';
                this.products = [];
              } else {
                searchTitle.innerText = 'Результаты поиска по запросу "' + this.subject + '"';
                for (let i = 0; i <= 100; i++) {
                  if (data[i]) {
                    productsAfterSearch.push(data[i])
                    this.products = productsAfterSearch;
                  }
                }
              }
            },
            error: (error) => {
              console.log(error)
              this.router.navigate(['/'])
            }
          })

      } else {
        searchTitle.innerText = '';
        this.showAllProducts();
      }
    })
  }

  showAllProducts() {
    this.subscription = this.productService.getProducts()
      .subscribe({
        next: (data: ProductType[]) => {
          this.loading = false;
          this.products = data;
        },
        error: (error) => {
          console.log(error)
          this.router.navigate(['/'])
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionParams?.unsubscribe()
  }


}
