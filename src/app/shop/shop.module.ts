import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
