import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageHomepageComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    PageHomepageComponent
  ]
})
export class HomeModule { }
