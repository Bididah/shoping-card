import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
