import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private childClickEvent = new BehaviorSubject<Product>({
    id: 0,
    productName: '',
    price: 0,
    quantity: 0,
    isImported: false,
    category: '',
  });

  emitEvent(product: Product) {
    this.childClickEvent.next(product);
  }

  eventListnner(): Observable<Product> {
    return this.childClickEvent.asObservable();
  }
}
