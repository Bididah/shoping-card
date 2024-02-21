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

  constructor(private eventService: EventService) {}

  addToCart(product: Product) {
    this.eventService.emitEvent(product);
  }
}
