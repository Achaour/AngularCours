import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';
import { ShopModule } from '../shop/shop.module';
import { IconModule } from '../icon/icon.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],

  exports: [
    HomeModule,
    SharedModule,
    ShopModule,
    IconModule
  ]


})
export class CoreModule { }
