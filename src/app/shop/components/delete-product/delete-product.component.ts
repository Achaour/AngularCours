import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  panier: number=0;

  constructor() { }

  ngOnInit(): void {

  }

  OnDelete(){
    this.panier--
  }

}
