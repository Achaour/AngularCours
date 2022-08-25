import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  panier: number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    // vérifier
    console.log('test');
    this.panier++
  }

  OnDelete(){
    this.panier--
  }

}
