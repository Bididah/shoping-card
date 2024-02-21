import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/products/productservice';
import { Product } from '../../../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products?: Observable<Product[]>;
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
