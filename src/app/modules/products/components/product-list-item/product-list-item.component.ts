import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { EventService } from '../../../../services/shared/event.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Input()
  product?: Product;

  quantity: number = 0;

  constructor(private eventService: EventService) {}

  increment() {
    if (this.quantity < this.product?.quantity!) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart(product: Product) {
    this.eventService.emitEvent(product);
  }
}
