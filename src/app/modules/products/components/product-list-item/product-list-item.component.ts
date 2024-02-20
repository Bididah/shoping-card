import { Component } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  productTest: Product = {
    id: 1,
    productName: 'Iphone 15',
    price: 1.76,
    quantity: 7,
    isImported: true,
    category: 'Food',
  };
}
