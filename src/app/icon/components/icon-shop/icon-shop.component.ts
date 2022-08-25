import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-shop',
  templateUrl: './icon-shop.component.html',
  styleUrls: ['./icon-shop.component.scss']
})
export class IconShopComponent implements OnInit {

  faShoppingCart=faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
