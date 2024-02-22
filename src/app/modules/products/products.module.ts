import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
