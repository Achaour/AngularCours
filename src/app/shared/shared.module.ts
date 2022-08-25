import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';




@NgModule({
  declarations: [
    NavComponent,

  ],
  exports:[

    NavComponent,

  ],
  imports: [
    CommonModule,RouterModule,IconModule
  ]
})
export class SharedModule { }
