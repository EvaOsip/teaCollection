import {Injectable} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderResponseType} from "../../../types/order-response.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient,) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: OrderResponseType): Observable<{ success: number, message?: string }> {
    return this.http.post<{success: number, message?: string}>(`https://testologia.site/order-tea`, data);
  }

  searchTea(param: string): Observable< any > {
    return this.http.get< any >(`https://testologia.site/tea?search=${param}`);
  }

}
