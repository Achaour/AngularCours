import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  sum!: number;
  buttonText!:string;

  constructor() { }

  ngOnInit(): void {

    this.sum=1;
    this.buttonText="Ajouter"
  }


  AddOne(){
    this.sum++
  }

  AddOrRemove(){
    if (this.buttonText==="Ajouter") {
      this.sum++
      this.buttonText="Remove"

    }else{
      this.sum--;
      this.buttonText="Ajouter"

    }


  }

}
