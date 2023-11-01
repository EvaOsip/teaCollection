import {Component} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  subject: string | null;
  searchInput: HTMLInputElement | null;

  constructor(private productService: ProductService,
              private http: HttpClient,
              private router: Router) {
    this.searchInput = null
    this.subject = null
  }

  doSearchTea(): void {
    this.searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (this.searchInput) {
      this.subject = this.searchInput.value;
      if (this.subject) {
        this.router.navigate(['/products'], {queryParams: {search: this.subject}})
      } else {
        this.router.navigate(['/products'])
      }
    }
  }
}
