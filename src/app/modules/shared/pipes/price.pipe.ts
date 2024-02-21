import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/product';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number | undefined, product: Product | undefined): number {
    let taxes: number = 0;
    if (product?.isImported) {
      taxes += value! * 0.05;
    }

    if (product?.category != 'Food' && product?.category != 'Medecine') {
      taxes += product?.category === 'Books' ? value! * 0.1 : value! * 0.2;
    }

    return value! + Number(taxes.toFixed(2));
  }
}
