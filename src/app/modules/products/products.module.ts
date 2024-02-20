import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
